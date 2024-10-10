import React,{useState} from 'react';
import './Menu.css'
import Cart from './Cart/Cart';


const Menu = ({ menuData }) => {

  const [cartItems, setCartItems]=useState([]);
  const [viewCart, setViewCart] = useState(false);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  
  return (
    <div className="menu-list">
      {menuData.map((item, index) => (
        <div key={index} className="menu-item">
          {console.log(index)}
          <img
            className="menu-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <h3 className="menu-name">{item.name}</h3>
          <p className="menu-price">{item.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>


        
      ))}
    </div>
  );
};

export default Menu;
