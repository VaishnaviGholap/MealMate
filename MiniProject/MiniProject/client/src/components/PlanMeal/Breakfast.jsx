// import React from 'react';
// import MealComponent from './MealComponent';



// const Breakfast = () => {
//   return <MealComponent mealType="Breakfast" apiEndpoint="breakfastmeals" />;

  

// };

// export default Breakfast;


import React from 'react';
import MealComponent from './MealComponent';
import GroceryList from './GroceryList';
import './Meal.css';

const Breakfast = () => {
  return (
    
    <div>
     <div className="quotes">"Rise and shine,it's breakfast time..!"</div>
      <MealComponent mealType="Breakfast" apiEndpoint="breakfastmeals" />
       <GroceryList mealType="Breakfast" apiEndpoint="breakfastgroceryitems"/> 
    </div>
  );
};

export default Breakfast;

