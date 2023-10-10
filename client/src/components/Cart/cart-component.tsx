import React, { useState, useEffect } from 'react';
import './cart-component.css';
import { Meal } from '../../interfaces/Meal';
import { Cart } from '../../interfaces/Cart';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState<Meal[]>([]);
  const [total, setTotal] = useState(0);

  const saveCart = async (meals: any[]) =>{
    const body = {meals};
    const userId = localStorage.getItem('user');
    let res = await fetch(`http://localhost:4000/cart/saveCart/${userId}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify(body)
    });
    if (res.status === 200) {
      const data = await res.json(); 
      console.log(data)
    }
  }
  const updateQuantity = async (itemId: string, newQuantity: number, sign: boolean) => {
    const updatedCartItems = cartItems.map((item: any) => {
      if (item.meal._id === itemId) {
        setTotal(total + (sign ? (item.meal.price) : (-1 * item.meal.price)));
        return { ...item, orderedQuantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    console.log(cartItems)
    await saveCart(cartItems)
  };

  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId) {
      fetch(`http://localhost:4000/cart/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setCartItems(data.meals);
          const totalPrice = data.meals.reduce((accumulator: number, currentItem: any) => {
            return accumulator + (currentItem.meal.price * currentItem.orderedQuantity);
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
              <tr key={item.meal.id}>
                <td>{item.meal.name}</td>
                <td>${Number(item.meal.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => updateQuantity(item.meal._id, item.orderedQuantity - 1, false)}>-</button>
                  {item.orderedQuantity}
                  {
                    !(item.orderedQuantity >= item.meal.quantity)
                      ? 
                        <button disabled={item.orderedQuantity >= item.meal.quantity} onClick={() => updateQuantity(item.meal._id, item.orderedQuantity + 1, true )}>+</button>      
                      : <> (Sold Out)</>
                  }
                </td>
                <td>${(Number(item.meal.price) * item.orderedQuantity).toFixed(2)}</td>
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
