import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';   

function App() {
  const [todo,setTodo] = useState([]);
  const [inputval,setInput] = useState("");

  const addTodo = () => {
    if (inputval.trim() !== ""){
      setTodo([...todo,inputval]);

      setInput("");
    }
  }

  const remove = (index) => {
    const copyExist = [...todo];
    copyExist.splice(index,1);
    setTodo(copyExist);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple To-Do App</h1>

      <input type="text" value={inputval} onChange={(e) => setInput(e.target.value)}/>

      <button onClick={addTodo}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todo.map((to,index)=>(
          <li key={index} style={{ margin: '10px 0' }}>
            {to}{" "}

            <button onClick={() => remove(index)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
