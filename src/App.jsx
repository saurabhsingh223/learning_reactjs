import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [Counter, setCounter] = useState(0);

  // let Counter = 15

  const addValue = () => {
    // Counter = Counter + 1;
    if(Counter < 20){
 setCounter(Counter+1)
    console.log(Counter);
    }else{
      alert("value cannot be more that 20")
    }
   
  };

  const removeValue = () => {
    // console.log("value removed", Math.random());
    // Counter = Counter - 1
    if(Counter > 0){
    setCounter(Counter-1)
    console.log(Counter);
    }else{
      alert("value cannot be less than 0")
    }
    
  };

  return (
    <>
      <h1>Hello Counter</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add Value: {Counter
}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {Counter}</button>
      <footer>footer: {Counter}</footer>
    </>
  );
}

export default App;
