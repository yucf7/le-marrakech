import './App.css';
import HomeComponent from './components/home/home-component';
import LoginComponent from './components/login/login-component';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import SignupComponent from './components/signup/signup-component';
import CartComponent from './components/Cart/cart-component';
import DeliveryComponent from './components/Delivery/delivery-component';
import MenuComponent from './components/menu/menu-component';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/delivery" element={<DeliveryComponent/>} />
        <Route path="/menu" element={<MenuComponent/>} />



        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  
  </>

  );
}

export default App;
