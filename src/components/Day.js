import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Day = ({ dayNumber }) => {
    const location = useLocation()
    const [background, setBackground] = useState("")
    // Background constant acts as a "over" or "not over" marker for each day on the calendar
    useEffect(()=>{
        setBackground("") 
    } ,[location])
    return (
        <div 
        id={"Day " + dayNumber} 
        className="day-cont" style={{border: "thin solid black", backgroundColor: background}} onClick={()=>background === "" ? setBackground("red") : setBackground("")}>
            <p>{dayNumber}</p>
        </div>
    )
}

export default Day
