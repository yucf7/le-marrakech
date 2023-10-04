import React, {useState} from 'react';
import './login-component.css'; 
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {'Content-Type': 'application/json'}
          });
          let resJson = await res.json();
          if (res.status === 200) {
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
        <h2 className='login-title'>Login</h2>
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
        <button type="submit">Login</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default LoginComponent;
