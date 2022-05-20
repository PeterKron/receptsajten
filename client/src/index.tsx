import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './routes/RecipesInCategory';
import { RecipeList } from './components/RecipeList';
import { SingleRecipe } from './components/SingleRecipe';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<RecipeList/>}/>
          {/* <Route path='recipe/search/:search' element={<RecipeList/>}/> */}
          <Route path='recipe/:recipeId' element={<SingleRecipe/>}/> 
          <Route path='category/:categoryname' element={<Categories/>}/> 
          {/* <Route path='category/:categoryname/:search' element={<Categories/>}/>  */}
        </Route> 
       </Routes> 
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
