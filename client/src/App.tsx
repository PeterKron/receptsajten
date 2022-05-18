import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Recipes } from './components/RecipeList';
import { Category } from './components/CategoryList';

function App() {
  return (
    <div className="App">
      
      <header>
        <Link to="/" className='cake'>
          <img className='ckeS' 
          src="./cake.png" 
          alt="" />
        </Link>
        <div className='welcome'>
          <h1 className='apph1'>Välkommen till Sötsuget.nu</h1>
          <div className='searchblock'>
            <img className='searchicon' src="./search.png" alt=""/>
            <input type="text" placeholder='Vilket recept är du sugen på idag?'/> 
          </div>
        </div>
      </header>
      
      <div className='wrapper'>
      <Outlet />
        {/* <Recipes /> */}
        <Category/>

      {/* </Outlet> */}
      </div>
    </div>
  );
}

export default App;
