import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanMeal.css';
import vegan from '../Assets/vegan.png'
import veg from '../Assets/veg.png'
import non from '../Assets/non.png'
import salad from '../Assets/salad.png'

const PlanMeal = () => {
  const navigate = useNavigate();




  return (
    <div className="plan-meal-box">
      <h2 id='title'>Plan Your Meal</h2>
      <button onClick={() => navigate('/weekly-meal-plan')} className="meal-type-button">Weekly Meal Plan</button>
      <button onClick={() => navigate('/plan-meal/breakfast')} className="meal-type-button">Breakfast</button>
      <button onClick={() => navigate('/plan-meal/lunch')} className="meal-type-button">Lunch</button>
      <button onClick={() => navigate('/plan-meal/dinner')} className="meal-type-button">Dinner</button>


      <section id="different">
    <div class="meals">
        <img src={vegan} alt="Salad"/> 
        <h3>Vegan</h3>
    </div>
    <div class="meals">
        <img src={veg} alt="Veg"/>
        <h3>Veg</h3>
    </div>
    <div class="meals">
        <img src={non} alt="non"/>
        <h3>Non-Veg</h3>
    </div>
    <div class="meals">
        <img src={salad} alt="salad"/>
        <h3>Salad</h3>
    </div>
</section>


      </div>
  );
};

export default PlanMeal;
