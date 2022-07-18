import React, { useState, useEffect } from "react";
import DogPics from "./DogPics"

function App() {
  const [ count, setCount]  = useState(0);
  //  const [text, setText] = useState(" ")

  useEffect(() => {
    console.log("useEffect called");
  });

  useEffect (() => {
    setTimeout(setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return (
    <>
        <button onClick={(() => setCount(count => count +1))}>
          Click Me
          {count}
        </button>
        < DogPics />
        <input 
          type= "text" 
          placeholder="Type away..." 
          // value={text}
          // onChange = {((e) = setText(e.target.value))}
        />
    </>
  )
}

export default App;
