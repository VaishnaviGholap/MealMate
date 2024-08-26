import React from 'react';
import { useState } from 'react';
import './WeeklyMealPlan.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import GroceryList from '../PlanMeal/GroceryList';

const WeeklyMealPlan = () => {
  const [weeklyMealPlan, setWeeklyMealPlan] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  });

  const [newMeal, setNewMeal] = useState('');
  const [selectedDay, setSelectedDay] = useState('monday');
  const [editingMeal, setEditingMeal] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addMeal = () => {
    if (newMeal.trim() !== '') {
      setWeeklyMealPlan({
        ...weeklyMealPlan,
        [selectedDay]: [...weeklyMealPlan[selectedDay], { id: Date.now(), name: newMeal }]
      });
      setNewMeal('');
    }
  };

  const updateMeal = (day, id) => {
    const updatedMeals = weeklyMealPlan[day].map((meal) =>
      meal.id === id ? { ...meal, name: editingText } : meal
    );
    setWeeklyMealPlan({ ...weeklyMealPlan, [day]: updatedMeals });
    setEditingMeal(null);
    setEditingText('');
  };

  const deleteMeal = (day, id) => {
    const updatedMeals = weeklyMealPlan[day].filter((meal) => meal.id !== id);
    setWeeklyMealPlan({ ...weeklyMealPlan, [day]: updatedMeals });
  };

  return (
    <div className="breakfast-container">
      <div className="marquee-container">
        <div className="marquee">"Plan your meal, nourish your body, and enjoy every bite..!"</div>
      </div>
      <div className="weekly-meal-plan">
            <h2 id='week'>Weekly Meal Plan</h2>
            <div>
              <label htmlFor="day">Select Day:</label>
              <select
                id="day"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
          
          <input
            type="text"
            value={newMeal}
            onChange={(e) => setNewMeal(e.target.value)}
            placeholder="Add new meal"
          />
          <button onClick={addMeal}>Add Meal</button>
          <div className="weekly-meals">
            {Object.keys(weeklyMealPlan).map(day => (
              <div key={day} className="day-meals">
                <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                <ul>
                  {weeklyMealPlan[day].map(meal => (
                    <li key={meal.id}>
                      <div className="added-meal">
                        {editingMeal === meal.id ? (
                          <input
                            type="text"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                          />
                        ) : (
                          meal.name
                        )}
                        <div className="edit-delete-button">
                          {editingMeal === meal.id ? (
                            <button onClick={() => updateMeal(day, meal.id)}><FaEdit /></button>
                          ) : (
                            <button onClick={() => {
                              setEditingMeal(meal.id);
                              setEditingText(meal.name);
                              setSelectedDay(day); // Update selected day when editing
                            }}>
                             <FaEdit />
                            </button>
                          )}
                          <button onClick={() => deleteMeal(day, meal.id)}><FaTrash /></button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        
      </div>
      <div className='box'>
      <GroceryList />
      </div>
    </div>
     
  );
};

export default WeeklyMealPlan;




