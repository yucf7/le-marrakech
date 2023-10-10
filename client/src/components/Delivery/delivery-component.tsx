import React, { useState, useEffect } from 'react';
import './delivery-component.css';
import { useNavigate } from 'react-router-dom';

function DeliveryComponent() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); 
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('user');
    setUser(String(userId));
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/order", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          address: address,
          total: total,
          user: user,
          meals : cartItems,
          status : 'PENDING'

        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.status === 200) {
        setAlertMessage("Successfully");
      } else {
        setAlertMessage("Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="delivery-body">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-title'>CONFIRMATION</h2>
        {alertMessage && (
          <div className={`alert ${alertMessage === 'Successfully' ? 'success' : 'failed'}`}>
            {alertMessage}
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="text"
            placeholder="Zip Code"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default DeliveryComponent;
