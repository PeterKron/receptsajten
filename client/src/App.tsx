import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Category } from './components/CategoryList';

const App = () => {

  return (
    <div className="App">  
      <header>
        <Link to="/" className='cake'>
          <img src="/cake.png" alt="animatedcake" />
        </Link>
        <div className='welcome'>
          <h2>Välkommen till Sötsuget.nu</h2>
        </div>
      </header>      
      <Outlet />
      <Category/>
    </div>
  );
}

export default App;
