
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("");
  // let [greet ,setGreet] = useState("")
  function getName(e){
    setName(`Hello ${e.target.value}!`)
    // setGreet(`hello ${name} !`)
  }
  return (
    <div>
      <p> Enter your name </p>
      <input type="text" onChange={getName}/>
        {
          name && <p>{name}</p>
        }
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
