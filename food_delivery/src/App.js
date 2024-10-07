import React from 'react'
// import './App.css'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import RestaurantList from './components/RestaurantList'
import Cart from './components/Cart/Cart'
// import Login from './components/login_register/Login'
// import Register from './components/login_register/Register'

const App = () => {
  return (
    <div className='App'>
      <Header/>
        <Cart/>
        <RestaurantList/>
      <Footer/>
      
    </div>
  )
}

export default App
