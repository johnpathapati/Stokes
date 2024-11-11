
import HomePage from './Components/home/homepage';
import Headerpage from './Components/header/headerpage';
import Areas from './Components/Areas/createareas';
import Homearea from './Components/Areas/areahome';

function App() {
  return (
    
    <div className="App">
      <h1>This is Home Page</h1>
      <Headerpage></Headerpage>
      <HomePage></HomePage>
      <Areas></Areas>
      <Homearea></Homearea>
    </div>
  );
}

export default App;
