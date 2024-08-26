// import React from 'react';
// import MealComponent from './MealComponent';

// const Lunch = () => {
//   return <MealComponent mealType="Lunch" apiEndpoint="lunchmeals" />;
// };

// export default Lunch;



import React from 'react';
import MealComponent from './MealComponent';
import GroceryList from './GroceryList';

const Lunch = () => {
  return (
    <div>
       <div className="quotes">"Lunchtime: where the flavor is always in full bloom..!"</div>
      <MealComponent mealType="Lunch" apiEndpoint="lunchmeals" />
      <GroceryList mealType="Lunch" apiEndpoint="lunchGrocery"/> 
    </div>
  );
};

export default Lunch;
