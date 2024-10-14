import React,{useState} from 'react';
import './Menu.css'
import { useLocation } from 'react-router-dom';
import Cart from './Cart/Cart';


const Menu = () => {

  const location = useLocation();
  const { menuData } = location.state; // Get menuData from location's state

  const [cartItems, setCartItems]=useState([]);
  const [viewCart, setViewCart] = useState(false);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

   // Function to toggle between the cart and menu view
   const toggleCartView = () => {
    setViewCart(!viewCart);
  };

  return (
    <div>
      {/* If viewCart is true, show Cart; otherwise, show Menu */}
      {viewCart ? (
        <Cart cartItems={cartItems} />
      ) : (
        <div className="menu-list">
          {menuData.map((item, index) => (
            <div key={index} className="menu-item">
              <img
                className="menu-image"
                src={item.imageUrl}
                alt={item.name}
              />
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)} // Add item to cart
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Toggle between Cart and Menu button */}
      <button onClick={toggleCartView} className="view-cart-button">
        {viewCart ? 'Go to Menu' : `View Cart (${cartItems.length})`}
      </button>
    </div>
  );
};

export default Menu;
