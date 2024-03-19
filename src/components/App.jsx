// Libraries
import React, { useState } from 'react';

function App() {
  // state
  const [inputText, setinputText] = useState('');
  const [items, setItems] = useState([]);

  // handler functions
  function handleChange(event) {
    const newValue = event.target.value;

    setinputText(newValue);
    console.log(newValue);
  }

  function handleClick() {
    setItems(prevItems => {
      return [...prevItems, inputText]
    });

    setinputText('');
  }

  // return
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />

        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
