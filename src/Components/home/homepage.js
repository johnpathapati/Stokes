import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function HomePage() {
    const handleClick = (message) => {
      alert(message);
    };
  
    return (
      <div className='main-body'>
        <h1>Welcome to the Homepage</h1>
        {/* <div className="button-grid">
        <button className='button' onClick={() => handleClick('Pack Fruit clicked!')}>Pack Fruit</button>
        <button className='button' onClick={() => handleClick('Stock clicked!')}>Stock</button>
        <button className='button' onClick={() => handleClick('Deliver Fruit clicked!')}>Deliver Fruit</button>
        <button className='button' onClick ={()=> handleClick('challans clicked!')}>Challans</button>
        </div>
        <div className="button-grid1">
        <button className='button1' onClick={() => handleClick('billing/payment clicked!')}>Billing/Payments</button>
        <button className='button1' onClick={() => handleClick('venderdata clicked!')}>Vender Data</button>
        <button className='button1' onClick={() => handleClick('orcharddata Fruit clicked!')}>Orchard Data</button>
        <button className='button1' onClick ={()=> handleClick('fruit/variety clicked!')}>Fruit / Variety</button>
        </div>
        <div className="button-grid2">
        <button className='button2' onClick={() => handleClick('areas clicked!')}>Areas</button>
        <button className='button2' onClick={() => handleClick('grades clicked!')}>Grades</button>
        <button className='button2' onClick={() => handleClick('Packing clicked!')}>Packing</button>
        <button className='button2' onClick ={()=> handleClick('sizes clicked!')}>Sizes</button>
        </div> */}


        <Router>
        <div>
        {/* <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Addagent">Addagent</a></li>
            <li><a href="/Registration">Registration</a></li>
          </ul>
        </nav> */}
        
        <Routes>
          {/* <Route path="./" element={ <Home />}></Route> */}
          <Route path="./areahome" element={ <areahome />}></Route>
          
        </Routes>
        </div>
      </Router>
      </div>


    );
  }
  
  export default HomePage;