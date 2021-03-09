import { useState } from 'react';

import './App.css';
import Calendar from "./components/Calendar";

function App() {
  const [showCal, setCalDisplay] = useState(true)
  const [x, setX] = useState(false)
  // let changeBackground = ()=>{
  //   setX(!x);
  // }
  return (
    <div className="primary_container" onClick={()=>setCalDisplay(!showCal)}>
      {showCal && <Calendar color={x ? "green" : "yellow"} onToggle={()=>setX(!x)}/>}
    </div>
  );
}

export default App;
