import React, { useState } from "react";
function App() {
  // 1* to save the state
  const [inputText, setInputText] = useState("");

  // 2* to have all items in an arrey
  const [items, setItems] = useState([]);

  // 1*1
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    // return newItem
    // console.log(newItem);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* 1*2 */}
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item </li> */}
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
