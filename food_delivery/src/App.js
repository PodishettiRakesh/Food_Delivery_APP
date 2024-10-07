import React from 'react'
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import RestaurantList from './components/RestaurantList'
import Login from './components/login_register/Login'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Login/>
      <Footer/>
      
    </div>
  )
}

export default App
