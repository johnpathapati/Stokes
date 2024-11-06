import React from 'react';
import './style.css';

function HomePage() {
    const handleClick = (message) => {
      alert(message);
    };
  
    return (
      <div className='main-body'>
        <h1>Welcome to the Homepage</h1>
        <div className="button-grid">
        <button onClick={() => handleClick('Pack Fruit clicked!')}>Pack Fruit</button>
        <button onClick={() => handleClick('Stock clicked!')}>Stock</button>
        <button onClick={() => handleClick('Deliver Fruit clicked!')}>Deliver Fruit</button>
        <button onClick ={()=> handleClick('challans clicked!')}>Challans</button>
        </div>
      </div>
    );
  }
  
  export default HomePage;