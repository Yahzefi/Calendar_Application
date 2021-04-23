import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import Calendar from "./components/Calendar";
import Pagination from './components/Pagination';
// import Month from "./components/Month"

function App() {
  const [showCal, setCalDisplay] = useState(false);

  return (
    <Router>
      {/* Conditionals relate to whether or not the calendar is "pulled up" or not */}
    <div className="primary_container" style={!showCal ? {flexDirection:"column"} : {flexDirection: "row"}}>
      <Route path='/' exact render={()=>(
        <>
        {!showCal && <h1>2021 Calendar</h1>}
          {!showCal &&
            <Link className="btn" to='/january'>
              <button 
                id="showCal_btn" 
                className="btn btn-success"
                onClick={()=>setCalDisplay(!showCal)}
              >Show Calendar
              </button>
            </Link>
          }
        </>
      )}
      />
      {showCal && <Calendar />}
      {showCal && <Pagination />}

      {showCal && 
        <Link className="btn" to="/">
        <button 
          id="hideCal_btn" 
          className="btn btn-danger"
          onClick={()=>setCalDisplay(!showCal)}
        >Hide Calendar
        </button>
        </Link>
      }

    </div>
    </Router>
  );
}


export default App;
