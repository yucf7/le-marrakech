import React, { useState, useEffect } from 'react';
import './cart-component.css';
import { Meal } from '../../interfaces/Meal';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState<Meal[]>([]);
  const [total, setTotal] = useState(0);

  const updateQuantity = (itemId: string, newQuantity: number, sign: boolean) => {
    const updatedCartItems = cartItems.map((item: any) => {
      if (item._id === itemId) {
        setTotal(total + (sign ? (item.price) : (-1 * item.price)));
        return { ...item, orderedQuantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId) {
      fetch(`http://localhost:4000/cart/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          const mealsWithQuantities = data.meals.map((meal: any, index: any) => ({
            ...meal,
            orderedQuantity: data.quantities[index]
          }));
          setCartItems(mealsWithQuantities);
          const totalPrice = mealsWithQuantities.reduce((accumulator: number, currentItem: any) => {
            return accumulator + (currentItem.price * currentItem.orderedQuantity);
          }, 0);
          setTotal(totalPrice);
        })
        .catch((error) => console.error('Erreur lors du chargement des données', error));
    }
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
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${Number(item.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => updateQuantity(item._id, item.orderedQuantity - 1, false)}>-</button>
                  {item.orderedQuantity}
                  <button onClick={() => updateQuantity(item._id, item.orderedQuantity + 1, true )}>+</button>
                </td>
                <td>${(Number(item.price) * item.orderedQuantity).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Your cart is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="cart-total">
        <span>Total : ${Number(total).toFixed(2)}</span>
      </div>
      <button className="confirm-button">Confirmer la commande</button>
    </div>
  );
};

export default CartComponent;
