import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import RestaurantList from './components/RestaurantList'
import Menu from './components/Menu';
import Cart from './components/Cart/Cart';
// import Login from './components/login_register/Login'
// import Register from './components/login_register/Register'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App
