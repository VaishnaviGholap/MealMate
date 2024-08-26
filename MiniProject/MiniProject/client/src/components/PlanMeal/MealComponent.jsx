// import React, { useState, useEffect } from 'react';
// import './Meal.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import GroceryList from './GroceryList';

// const MealComponent = ({ mealType, apiEndpoint }) => {
//   const [meals, setMeals] = useState([]);
//   const [newMeal, setNewMeal] = useState('');
//   const [editingMeal, setEditingMeal] = useState(null);
//   const [editingText, setEditingText] = useState('');

//   useEffect(() => {
//     fetchMeals();
//   }, []);

//   const fetchMeals = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/${apiEndpoint}`);
//       const data = await response.json();
//       setMeals(data);
//     } catch (err) {
//       console.error(`Error fetching ${mealType} meals:`, err);
//     }
//   };

//   const addMeal = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/${apiEndpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: newMeal })
//       });
//       const data = await response.json();
//       setMeals([...meals, data]);
//       setNewMeal('');
//     } catch (err) {
//       console.error(`Error adding ${mealType} meal:`, err);
//     }
//   };

//   const updateMeal = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8081/${apiEndpoint}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: editingText })
//       });
//       const data = await response.json();
//       setMeals(meals.map((meal) => (meal._id === id ? data : meal)));
//       setEditingMeal(null);
//       setEditingText('');
//     } catch (err) {
//       console.error(`Error updating ${mealType} meal:`, err);
//     }
//   };

//   const deleteMeal = async (id) => {
//     try {
//       await fetch(`http://localhost:8081/${apiEndpoint}/${id}`, {
//         method: 'DELETE'
//       });
//       setMeals(meals.filter((meal) => meal._id !== id));
//     } catch (err) {
//       console.error(`Error deleting ${mealType} meal:`, err);
//     }
//   };

//   return (
//     <div className="meal-container">
//       <div className="marquee-container">
//         <div className="marquee">{`"${mealType}: the highlight of my day!"`}</div>
//       </div>
//       <div className="meal-box">
//         <h2 id="dark">{mealType}</h2>
//         <input
//           type="text"
//           value={newMeal}
//           onChange={(e) => setNewMeal(e.target.value)}
//           placeholder="Add new meal"
//         />
//         <button onClick={addMeal}>Add</button>
//         <ul>
//           {meals.map((meal) => (
//             <li key={meal._id}>
//               {editingMeal === meal._id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editingText}
//                     onChange={(e) => setEditingText(e.target.value)}
//                   />
//                   <button onClick={() => updateMeal(meal._id)}><FaEdit /></button>
//                 </>
//               ) : (
//                 <>
//                   {meal.name}
//                   <button onClick={() => { setEditingMeal(meal._id); setEditingText(meal.name); }}><FaEdit /></button>
//                   <button onClick={() => deleteMeal(meal._id)}><FaTrash /></button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//         <GroceryList />
//       </div>
//     </div>
//   );
// };

// export default MealComponent;

import React, { useState, useEffect } from 'react';
import './Meal.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import GroceryList from './GroceryList';

const MealComponent = ({ mealType, apiEndpoint }) => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState('');
  const [editingMeal, setEditingMeal] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch(`http://localhost:8081/${apiEndpoint}`);
      const data = await response.json();
      setMeals(data);
    } catch (err) {
      console.error(`Error fetching ${mealType} meals:`, err);
    }
  };

  const addMeal = async () => {
    try {
      const response = await fetch(`http://localhost:8081/${apiEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newMeal })
      });
      const data = await response.json();
      setMeals([...meals, data]);
      setNewMeal('');
    } catch (err) {
      console.error(`Error adding ${mealType} meal:`, err);
    }
  };

  const updateMeal = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/${apiEndpoint}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: editingText })
      });
      const data = await response.json();
      setMeals(meals.map((meal) => (meal._id === id ? data : meal)));
      setEditingMeal(null);
      setEditingText('');
    } catch (err) {
      console.error(`Error updating ${mealType} meal:`, err);
    }
  };

  const deleteMeal = async (id) => {
    try {
      await fetch(`http://localhost:8081/${apiEndpoint}/${id}`, {
        method: 'DELETE'
      });
      setMeals(meals.filter((meal) => meal._id !== id));
    } catch (err) {
      console.error(`Error deleting ${mealType} meal:`, err);
    }
  };

  return (
    <div className="meal-container">
      <div className="marquee-container">
        {/* <div className="marquee">{`"${mealType}: the highlight of my day!"`}</div> */}
      </div>
      <div className="meal-box">
        <h2 id="dark">{mealType}</h2>
        <input
          type="text"
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
          placeholder="Add new meal"
        />
        <button onClick={addMeal}>Add</button>
        <ul>
          {meals.map((meal) => (
            <li key={meal._id}>
              {editingMeal === meal._id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => updateMeal(meal._id)}>
                   Add
                    </button>
                </>
              ) : (
                <>
                  {meal.name}
                  <button onClick={() => { setEditingMeal(meal._id); setEditingText(meal.name); }}><FaEdit /></button>
                  <button onClick={() => deleteMeal(meal._id)}><FaTrash /></button>
                </>
              )}
            </li>
          ))}
        </ul>
        {/* <GroceryList /> */}
      </div>
    </div>
  );
};

export default MealComponent;