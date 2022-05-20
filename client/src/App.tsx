import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Category } from './components/CategoryList';
import { Input } from './components/Input';

const App = () => {

  return (
    <div className="App">
      
      <header>
        <Link to="/" className='cake'>
          <img src="./cake.png" alt="animatedcake" />
        </Link>
        <div className='welcome'>
          <h2>Välkommen till Sötsuget.nu</h2>
          <div className='searchblock'>
            <img className='searchicon' src="./search.png" alt=""/>
            {/* <Input onChange = { (event :any) => SendText(event.target.value) }/> */}
            {/* <Input onChange = { (event :any) => searchtext = event.target.value }/> */}
            {/* <input type="text" placeholder='Vilket recept är du sugen på idag?'/>  */}
          </div>
        </div>
      </header>
      
      <div className='wrapper'>
      <Outlet />
        <Category/>

      {/* </Outlet> */}
      </div>
    </div>
  );
}

export default App;
