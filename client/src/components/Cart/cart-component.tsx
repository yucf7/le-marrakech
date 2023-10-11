import React, { useState, useEffect } from 'react';
import './cart-component.css';
import { Meal } from '../../interfaces/Meal';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState<Meal[]>([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();


  
  const deleteMeal = async (mealId: any) =>{
    const userId = localStorage.getItem('user');
    let res = await fetch(`http://localhost:4000/cart/delete/${mealId}/${userId}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
    });
    if (res.status === 200) {
      window.location.reload();
    }
  }
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
    }
  }
  const updateQuantity = async (itemId: string, newQuantity: number, sign: boolean) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map((item: any) => {
        if (item.meal._id === itemId) {
          const updatedQuantity = item.orderedQuantity + (sign ? 1 : -1);

          const orderedQuantity = Math.max(updatedQuantity, 0);
          if(orderedQuantity > 0)
            setTotal(total + (sign ? item.meal.price : -item.meal.price));
          return { ...item, orderedQuantity };
        }
        return item;
      });
  
      saveCart(updatedCartItems); 
  
      return updatedCartItems; 
    });
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
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <tr key={item.meal._id}>

                <td>
                  <div>
                    <button onClick={()=>{deleteMeal(item.meal._id)}}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrash} />
                    </button>
                    {item.meal.name}
                  </div>
                </td>
                <td>${Number(item.meal.price).toFixed(2)}</td>
                <td>
                  {
                    item.orderedQuantity != 1
                    ? (
                      <button onClick={() => updateQuantity(item.meal._id, item.orderedQuantity - 1, false)}>-</button>
                    )
                    : (
                      null
                    )
                  }
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
      <button onClick={()=>navigate('/delivery')} className="confirm-button">Confirm</button>
    </div>
  );
};

export default CartComponent;
