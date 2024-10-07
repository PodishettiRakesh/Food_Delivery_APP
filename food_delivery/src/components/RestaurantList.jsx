import React from 'react'
import './RestaurantList.css'
import { useState } from 'react'
import Menu from './Menu';

const restaurantData = [
  {
    name: 'Biryani Palace',
    description: 'Famous for Hyderabadi Biryani with rich flavors and spices.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Chicken Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { name: 'Paneer Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.99' },
    ]
  },
  {
    name: 'Paradise Restaurant',
    description: 'Iconic spot known for its legendary biryani and Mughlai cuisine.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Mutton Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.99' },
      { name: 'Hyderabadi Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$13.49' },
    ]
  },
    {
      name: 'Shah Ghouse',
      description: 'Popular for authentic Hyderabadi dishes and kebabs.',
      imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    },
    {
        name: 'Chutneys',
        description: 'Renowned for its delicious South Indian breakfasts and chutneys.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      },
      {
        name: 'Olive Bistro',
        description: 'A cozy restaurant offering Mediterranean and European cuisine.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      },
      {
        name: 'Ohri\'s 70mm',
        description: 'Themed restaurant serving Indian, Chinese, and Continental dishes.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      },
      {
        name: 'Minerva Coffee Shop',
        description: 'Popular for South Indian vegetarian dishes and coffee.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      },
      {
        name: 'Tatva',
        description: 'Elegant restaurant known for its vegetarian fusion cuisine.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      }
    
  ];

  const RestaurantList = () => {
    const [selectedMenu, setSelectedMenu] = useState(null); // State for selected restaurant's menu
  
    const handleViewMenu = (menu) => {
      setSelectedMenu(menu); // Set the selected restaurant's menu
    };
  
    return (
      <div>
        {selectedMenu ? (
          <Menu menuData={selectedMenu} />
        ) : (
          <div className="restaurant-list">
            {restaurantData.map((restaurant, index) => (
              <div key={index} className="restaurant-card">
                <img
                  className="restaurant-image"
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                />
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-description">{restaurant.description}</p>
                <button onClick={() => handleViewMenu(restaurant.menu)}>
                  View Menu
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default RestaurantList;