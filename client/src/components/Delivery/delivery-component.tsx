import React, { useState } from 'react';
import './delivery-component.css';
import { useNavigate } from 'react-router-dom';

function DeliveryComponent() {
  //const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: JSON.stringify({
          zipcode: zipcode,
          firstName: firstName,
          lastName: lastName,
          address: address,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" ">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-title'>CONFIRMATION</h2>
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
        <button type="submit">Confirmer</button>
      </form>
    </div>
  );
}

export default DeliveryComponent;
