import React, { useState } from 'react';
import './signup-component.css';
import { useNavigate } from 'react-router-dom';

function SignupComponent() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          address: address,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      let resJson = await res.json();
      if (resJson && resJson.user) {
        localStorage.setItem('token', resJson.token)
        navigate('/');
      } else {
        setMessage("Wrong email or password");
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" ">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-title'>Sign Up</h2>
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
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        <button type="submit">Sign Up</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default SignupComponent;
