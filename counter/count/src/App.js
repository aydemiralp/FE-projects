
import './App.css';
import React, { useState } from 'react';




function App() {

  const [counter , setCounter] = useState(0);
  
  return (
    <div className="App">
      <h1> Hello ALP AYDEMIR</h1>
      <h2> Lets Start Coding </h2>
        
       <p>{counter}</p>

    <button onClick ={() => {
    setCounter(counter +1);
    }}>Increase Counter</button>

    <button onClick= {() => {
    setCounter(counter -1);
    }}>Decrease Counter</button>


    <button onClick= {()=> 
    {setCounter(0);}}>Reset</button>
       
    </div>
  );
}

export default App;
