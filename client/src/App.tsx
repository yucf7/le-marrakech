import './App.css';
import HomeComponent from './components/home/home-component';
import LoginComponent from './components/login/login-component';
import { BrowserRouter as Router,Routes, Route, Link, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth-middleware';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route  path='/' element={< HomeComponent />}></Route>
          <Route
            path="/login"
            element={
              isAuthenticated() ? (
                <Navigate to="/" /> 
              ) : (
                <LoginComponent />
              )
            }
  />
        </Routes>
    </Router>
  </>

  );
}

export default App;
