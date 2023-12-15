import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button onClick={decrement} className="action-button">
          <i className="fas fa-minus"></i>
        </button>
        <button onClick={increment} className="action-button">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Counter;


// 51685004109