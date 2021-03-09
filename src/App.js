import { useState } from 'react';

import './App.css';
import Calendar from "./components/Calendar";

function App() {

  const [showCal, setCalDisplay] = useState(false)


  return (
    <div className="primary_container">

      {!showCal && 
        <button 
          id="showCal_btn" 
          className="btn btn-success"
          onClick={()=>setCalDisplay(!showCal)}
        >Show Calendar
        </button>
      }

      {showCal && <Calendar />}

      {showCal && 
        <button 
          id="hideCal_btn" 
          className="btn btn-danger"
          onClick={()=>setCalDisplay(!showCal)}
        >Hide Calendar
        </button>
      }

    </div>
  );
}

export default App;
