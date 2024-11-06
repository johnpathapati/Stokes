//import logo from './sho.png';
//import './App.css';
import HomePage from './Components/home/homepage';
import Headerpage from './Components/header/headerpage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
     {/*   <img src={logo} className="App-logo" alt="logo" /> 
      </header> */}
      <Headerpage></Headerpage>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
