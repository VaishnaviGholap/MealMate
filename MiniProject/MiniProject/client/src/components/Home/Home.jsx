import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';


const Home = () => {

    const navigate = useNavigate();
    return (
        <div className='home-box'>
            <h1 className="pt-5">WELCOME</h1>
            <h4 id='hom1'>Relieve the stress of the meal planning and delight during meal time...</h4>
            <button onClick={() => navigate('/plan-meal')} className="plan-meal-button">Plan a Meal</button>
            <Hero/>
        </div>
    )
}

export default Home