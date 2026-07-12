
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";


const App = () => {
  const [isLoggedIn,setisLoggedIn] = useState(false)
  return (
    <div>
      <Child isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
    </div>
  )
}

export default App
