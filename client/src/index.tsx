import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './views/RecipesInCategory';
import { RecipeList } from './views/RecipeList';
import { SingleRecipe } from './views/SingleRecipe';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let lets = 9

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<RecipeList texts={lets}/>}/>
          <Route path='recipe/:recipeId' element={<SingleRecipe/>}/> 
          <Route path='category/:categoryname' element={<Categories/>}/> 
        </Route> 
       </Routes> 
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
