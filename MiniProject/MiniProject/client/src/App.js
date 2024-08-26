import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PlanMeal from './components/PlanMeal/PlanMeal';
import Breakfast from './components/PlanMeal/Breakfast';
import Lunch from './components/PlanMeal/Lunch';
import Dinner from './components/PlanMeal/Dinner';
import WeeklyMealPlan from './components/PlanMeal/WeeklyMealPlan';
import LoginSignup from './components/LoginSignup/LoginSignup';


const App = () => {
  return (
   <>
<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plan-meal" element={<PlanMeal />} />
        <Route path="/plan-meal/breakfast" element={<Breakfast />} />
        <Route path="/plan-meal/lunch" element={<Lunch />} />
        <Route path="/plan-meal/dinner" element={<Dinner />} />
        <Route path="/weekly-meal-plan" element={<WeeklyMealPlan />} />
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
   </>
  );
};

export default App;