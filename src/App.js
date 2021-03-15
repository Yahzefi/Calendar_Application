import { useState } from 'react';

import './App.css';
import Calendar from "./components/Calendar";
import Pagination from './components/Pagination';
import Month from "./components/Month"

function App() {
  const [showCal, setCalDisplay] = useState(false);
  const [isSet, setMonthStatus] = useState(false);
  const [thisMonth, changeCurrentMonth] = useState(undefined);

  const changeMonth = (ev) =>{
    if(!isSet){
      setMonthStatus(!isSet)
    }

    // MAKESHIFT "ACTIVE LINK" USING SPAN ELEMENTS INSTEAD OF ANCHOR TAGS
    // let pageList = document.getElementById("page_navigation").children;
    // let activeMonth = document.getElementById(ev.target.id);
    // for(let i=0; i < pageList.length; i++){
    //   let month = document.getElementById('m-' + [i + 1]);
    //   if(month !== activeMonth){
    //     month.style.backgroundColor = "";
    //   } else {
    //     month.style.backgroundColor = "rgb(106, 140, 252)"
    //   }
    // }

    // switch(ev.target.id){
    //   case "m-1":
    //     changeCurrentMonth("January")
    //     break;
    //   case "m-2":
    //     changeCurrentMonth("February")
    //     break;
    //   case "m-3":
    //     changeCurrentMonth("March")
    //     break;
    //   case "m-4":
    //     changeCurrentMonth("April")
    //     break;
    //   case "m-5":
    //     changeCurrentMonth("May")
    //     break;
    //   case "m-6":
    //     changeCurrentMonth("June")
    //     break;
    //   case "m-7":
    //     changeCurrentMonth("July")
    //     break;
    //   case "m-8":
    //     changeCurrentMonth("August")
    //     break;
    //   case "m-9":
    //     changeCurrentMonth("September")
    //     break;
    //   case "m-10":
    //     changeCurrentMonth("October")
    //     break;
    //   case "m-11":
    //     changeCurrentMonth("November")
    //     break;
    //   case "m-12":
    //     changeCurrentMonth("December")
    //     break;
    //   default:
    //     throw new Error("Route Not Found");
    // }
  }

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

      {/* {showCal && <Calendar currentMonth={!isSet ? Month.defaultProps.month : thisMonth}/>} */}
      {showCal && <Calendar />}
      {showCal && <Pagination navClick={changeMonth}/>}

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
