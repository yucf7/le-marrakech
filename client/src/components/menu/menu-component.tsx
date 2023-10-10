import React, { useState, useEffect } from 'react';
import './menu-component.css';
import CartComponent from '../Cart/cart-component';
import { Meal } from '../../interfaces/Meal';

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([{}]);
  const userId = localStorage.getItem('user');


  useEffect(() => {
    fetch('http://localhost:4000/') 
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Erreur lors du chargement des données', error));
  }, []);

  const addToCart = async (menuItem: Meal) => {
    try {
      const mealId = menuItem._id;
      const userId = localStorage.getItem('user');
      let res = await fetch(`http://localhost:4000/cart/add/${mealId}/${userId}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'}
      });
      if (res.status === 200) {
        const data = await res.json(); 
        // show popup animation 
        // RANYA
      }
    setCart([...cart, menuItem]);               
  }
  catch(error){
    console.log(error);
  }
  }

  return (
    <div className="menu-container">
      <span className="mu-subtitle">Discover</span>
      <h1 className="mu-subtitle">OUR MENU</h1>
      {userId ? null : <h5 className="mu-subtitle">TO ORDER YOU MUST BE LOGGED IN</h5>}

      <div className="menu">
        {menuItems.map((menuItem: any) => (
          <div className="menu-item" key={menuItem.id}>
            {(menuItem.quantity === 0) && (
              <div className="image-overlay"></div>
            )}
            <img src={menuItem.image} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <p>{menuItem.description}</p>
            <span>Prix : ${menuItem.price}</span>
            <div className="quantity">
              {(menuItem.quantity === 0 || !userId) ? (
                <div className="out-of-stock">
                </div>
              ) : (
                <button onClick={() => addToCart(menuItem)} disabled={false}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
