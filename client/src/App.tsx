import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// hej = strängen dvs typ titeln på receptet
import {hej} from './routes/SingleRecipe'
import { Recipes } from './components/RecipeList';
import { Category } from './components/CategoryList';

function App() {
  return (
    <div className="App">
      
      <header>
        <img className='cake' 
        src="./cake.png" 
         alt="" />
        <div className='welcome'>
          <h1 className='apph1'>Välkommen till Sötsuget.nu</h1>
          <div className='searchblock'>
            <img className='searchicon' src="./search.png" alt=""/>
            <input type="text" placeholder='Vilket recept är du sugen på idag?'/> 
          </div>
        </div>
      </header>
      
      <div className='wrapper'>
      {/* <Link to="/Kategorinamndynamiskt"> */}
        {/* här i ligger alla categorierrrrrr? */}
        {/* Category.. */}
      {/* </Link> */}
      {/* <Link to={hej}> */}
        {/* här ligger listan med alla recept? */}
        {/* Receptet */}
      {/* </Link> */}
      
      <Recipes />
      <Category/>

      </div>
    </div>
  );
}

export default App;
