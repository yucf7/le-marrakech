import React, { useState, useEffect } from 'react';
import './menu-component.css';
import CartComponent from '../Cart/cart-component';
import { Meal } from '../../interfaces/Meal';



const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:4000/') 
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Erreur lors du chargement des données', error));
  }, []);

  const addToCart = async (menuItem : Meal) => {
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
      <div className="menu">
        {menuItems.map((menuItem: any) => (
          <div className="menu-item" key={menuItem.id}>
            <img src={menuItem.image} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <p>{menuItem.description}</p>
            <span>Prix : ${menuItem.price}</span>
            <div>
            <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
