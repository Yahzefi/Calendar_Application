import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Day = ({ dayNumber }) => {
    const location = useLocation()
    const [background, setBackground] = useState("")
    useEffect(()=>{
        setBackground("") 
    } ,[location])
    return (
        <div 
        id={
            "Day " + dayNumber
            // WHERE TO PUT CONTEXT 
        } 
        className="day-cont" style={{border: "thin solid black", backgroundColor: background}} onClick={()=>background === "" ? setBackground("red") : setBackground("")}>
            <p>{dayNumber}</p>
        </div>
    )
}

export default Day
