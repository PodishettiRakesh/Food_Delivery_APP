import React from 'react'

const restaurantData = [
    {
      name: 'Biryani Palace',
      description: 'Famous for Hyderabadi Biryani with rich flavors and spices.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Paradise Restaurant',
      description: 'Iconic spot known for its legendary biryani and Mughlai cuisine.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Shah Ghouse',
      description: 'Popular for authentic Hyderabadi dishes and kebabs.',
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];
const RestaurantList = () => {
  return (
    <div>
        {restaurantData.map((restuarant, index) =>(
            <div key={index} className='rest-card'>
                <img className='rest-image' src={restuarant.imageUrl} alt={restuarant.name}/>
                <h2 className='rest-name'>{restuarant.name}</h2>
                <p className='rest-description'>{restuarant.description}</p>
                <button className='view-menu-btn'>view menu</button>
            </div>
        ))}
    </div>
  );
}

export default RestaurantList
