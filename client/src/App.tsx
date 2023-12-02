import "./App.css";
import HomeComponent from "./components/home/home-component";
import LoginComponent from "./components/login/login-component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupComponent from "./components/signup/signup-component";
import CartComponent from "./components/Cart/cart-component";
import DeliveryComponent from "./components/Delivery/delivery-component";
import MenuComponent from "./components/menu/menu-component";
import { useEffect, useState } from "react";
import { isAuthenticated } from "./utils/auth-middleware";

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        async function checkAuthentication() {
            try {
                const isAuthenticatedVar = await isAuthenticated();
                setAuthenticated(isAuthenticatedVar);
            } catch (error) {
                console.error(error);
            }
        }

        checkAuthentication();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/login" element={authenticated ? <Navigate to="/" /> : <LoginComponent />} />
                <Route path="/signup" element={authenticated ? <Navigate to="/" /> : <SignupComponent />} />
                <Route path="/cart" element={<CartComponent />} />
                <Route path="/delivery" element={<DeliveryComponent />} />
                <Route path="/menu" element={<MenuComponent />} />
                <Route path="*" element={<div>NOT FOUND</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
