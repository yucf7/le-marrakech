import React, { useState, useEffect } from 'react';
import './cart-component.css';

const CartComponent = () => {
  // Exemple de données pour les plats dans le panier
  const initialCartItems = [
    { id: 1, name: 'SEFFA', price: 15.95, quantity: 2 },
    { id: 2, name: 'COUSCOUS', price: 12.95, quantity: 1 },
    { id: 3, name: 'PASTILLA', price: 18.95, quantity: 3 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateQuantity = (itemId: any, newQuantity: any) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Fonction pour calculer le total du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Effet pour mettre à jour le total lorsque le panier change
  useEffect(() => {
    const total = calculateTotal();
    // Mettre à jour le total dans le state si nécessaire
  }, [cartItems]);

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
          {cartItems.map((item) => (
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
        <span>Total : ${calculateTotal().toFixed(2)}</span>
      </div>
      <button className="confirm-button">Confirmer la commande</button>
    </div>
  );
};

export default CartComponent;
