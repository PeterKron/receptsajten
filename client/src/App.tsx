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
      
      <header>https://github.com/PeterKron/receptsajten/blob/master/client/src/assets/cake.png
        <img src="C:\users\peter\Documents\ITHS\fullstackutveckling\receptsajten\client\src\assets\cake.png" width={50} height={50} alt="" />
        <h1 className='apph1'>Välkommen till Sötsuget.nu</h1>
        <input type="text" />
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
