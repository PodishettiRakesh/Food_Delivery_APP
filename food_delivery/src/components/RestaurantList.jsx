import React from 'react'
import './RestaurantList.css'

const restaurantData = [
  {
    name: 'Biryani Palace',
    description: 'Famous for Hyderabadi Biryani with rich flavors and spices.',
    imageUrl: 'https://www.example.com/images/biryani-palace.jpg',
    menu: [
      { name: 'Chicken Biryani', imageUrl: 'https://via.placeholder.com/150', price: '$12.99' },
      { name: 'Paneer Biryani', imageUrl: 'https://via.placeholder.com/150', price: '$10.99' },
    ]
  },
  {
    name: 'Paradise Restaurant',
    description: 'Iconic spot known for its legendary biryani and Mughlai cuisine.',
    imageUrl: 'https://www.example.com/images/paradise-restaurant.jpg',
    menu: [
      { name: 'Mutton Biryani', imageUrl: 'https://via.placeholder.com/150', price: '$14.99' },
      { name: 'Hyderabadi Chicken', imageUrl: 'https://via.placeholder.com/150', price: '$13.49' },
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
  return (
    <div className='restaurant-list'>
        {restaurantData.map((restuarant, index) =>(
            <div key={index} className='restaurant-card'>
                <img className='restaurant-image' src={restuarant.imageUrl} alt={restuarant.name}/>
                <h2 className='restaurant-name'>{restuarant.name}</h2>
                <p className='restaurant-description'>{restuarant.description}</p>
                <button className='view-menu-btn'>view menu</button>
            </div>
        ))}
    </div>
  );
}

export default RestaurantList
