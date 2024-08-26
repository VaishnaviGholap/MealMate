// import React from 'react';
// import MealComponent from './MealComponent';

// const Dinner = () => {
//   return <MealComponent mealType="Dinner" apiEndpoint="dinnermeals" />;
// };

// export default Dinner;

import React from 'react';
import MealComponent from './MealComponent';
import GroceryList from './GroceryList';

const Dinner = () => {
  return (
    <div>
        <div className="quotes">"Food full of mood"</div>
      <MealComponent mealType="Dinner" apiEndpoint="dinnermeals" />
       <GroceryList mealType="Dinner" apiEndpoint="dinnergroceryItems" /> 
    </div>
  );
};

export default Dinner;

