import React, { useState, useEffect } from 'react';
import './cart-component.css';
import { Meal } from '../../interfaces/Meal';

interface Cart {
  meals: Meal
}

const CartComponent = () => {
  const [cartItems, setCartItems] = useState<Meal[]>([]);
  const [total, setTotal] = useState(0);

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateQuantity = (itemId:String, newQuantity:number) => {
    const updatedCartItems  = cartItems.map((item : Meal) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const userId = localStorage.getItem('user');
    fetch(`http://localhost:4000/cart/${userId}`) 
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.cartItems);
        setTotal(data.total);
      })
      .catch((error) => console.error('Erreur lors du chargement des données', error));
  }, []);

  return (
    <div className="cart-page">
      <h1>Votre Panier</h1>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: Meal) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <span>Total : ${total.toFixed(2)}</span>
      </div>
      <button className="confirm-button">Confirmer la commande</button>
    </div>
  );
};

export default CartComponent;
