import React, { useState, useEffect } from 'react';
import './Meal.css';

const GroceryList = ({ mealType, apiEndpoint }) => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchGroceryItems();
  }, []);

  const fetchGroceryItems = async () => {
    try {
      const response = await fetch(`http://localhost:8081/${apiEndpoint}`);
      const data = await response.json();
      setGroceryItems(data);
    } catch (error) {
      console.error(`Error fetching ${mealType} meals:`, error);
    }
  };

  const addGroceryItem = async () => {
    try {
      if (newItem.trim() !== '') {
        const response = await fetch(`http://localhost:8081/${apiEndpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: newItem.trim() })
        });
        const data = await response.json();
        setGroceryItems([...groceryItems, data]);
        setNewItem('');
      }
    } catch (error) {
      console.error('Error adding grocery item:', error);
    }
  };

  const removeGroceryItem = async (id) => {
    try {
      await fetch(`http://localhost:8081/${apiEndpoint}/${id}`, {
        method: 'DELETE'
      });
      setGroceryItems(groceryItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing grocery item:', error);
    }
  };

  return (
    <div className='Grocery-box' >
      <h3 id='g1'>Grocery List</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add grocery item"
      />
      <button onClick={addGroceryItem}>Add Item</button>
      <ul>
        {groceryItems.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => removeGroceryItem(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;




// import React, { useState, useEffect } from 'react';
// import './Meal.css';

// const GroceryList = ({ mealType }) => {

//   console.log("Meal Type:", mealType);

//   const [groceryItems, setGroceryItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   useEffect(() => {
//     fetchGroceryItems();
//   }, []);

//   const fetchGroceryItems = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/${mealType}groceryitems`);
//       const data = await response.json();
//       setGroceryItems(data);
//     } catch (error) {
//       console.error('Error fetching grocery items:', error);
//     }
//   };

//   const addGroceryItem = async () => {
//     try {
//       if (newItem.trim() !== '') {
//         const response = await fetch(`http://localhost:8081/${mealType}groceryitems`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ name: newItem.trim() })
//         });
//         const data = await response.json();
//         setGroceryItems([...groceryItems, data]);
//         setNewItem('');
//       }
//     } catch (error) {
//       console.error('Error adding grocery item:', error);
//     }
//   };

//   const removeGroceryItem = async (id) => {
//     try {
//       await fetch(`http://localhost:8081/${mealType}groceryitems/${id}`, {
//         method: 'DELETE'
//       });
//       setGroceryItems(groceryItems.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error('Error removing grocery item:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>{mealType} Grocery List</h3>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder={`Add ${mealType} grocery item`}
//       />
//       <button onClick={addGroceryItem}>Add Item</button>
//       <ul>
//         {groceryItems.map((item) => (
//           <li key={item._id}>
//             {item.name}
//             <button onClick={() => removeGroceryItem(item._id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GroceryList;
