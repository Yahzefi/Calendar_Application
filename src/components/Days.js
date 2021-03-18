import Day from "./Day"

import { useLocation } from "react-router-dom"

const Days = () => {
    const location = useLocation()
    let daysArr = [];
    for(let i=1; i < 36; i++){
        daysArr.push(i)
    }
    return (
        <div className="days-cont">
            {location.pathname === "/january" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 32 ? day : ""}/>
            )): daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 5 ? "" : day < 36 ? (day - 4): ""}/>
            ))}
        </div>
    )
}

export default Days
