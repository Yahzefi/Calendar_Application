import Day from "./Day"

import { useLocation } from "react-router-dom"

const Days = ({ dayClick }) => {
    const location = useLocation()
    let daysArr = [];
    for(let i=1; i < 43; i++){
        daysArr.push(i)
    }
    return (
        <div className="days-cont">
            {location.pathname === "/january" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 6 ? "" : day < 37 ? (day-5): ""} dayClick={dayClick}/>
            )): location.pathname === "/february" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 30 ? (day - 1): ""} dayClick={dayClick}/>
            )): location.pathname === "/march" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 33 ? (day - 1): ""} dayClick={dayClick}/>
            )): location.pathname === "/april" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 5 ? "" : day < 35 ? (day - 4): ""} dayClick={dayClick}/>
            )): location.pathname === "/may" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 7 ? "" : day < 38 ? (day - 6): ""} dayClick={dayClick}/>
            )): location.pathname === '/june' ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 3 ? "" : day < 33 ? (day - 2): ""} dayClick={dayClick}/>
            )): location.pathname === "/july" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 5 ? "" : day < 36 ? (day - 4): ""} dayClick={dayClick}/>
            )): location.pathname === "/august" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 32 ? day : ""} dayClick={dayClick}/>
            )): location.pathname === "/september" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 4 ? "" : day < 34 ? (day - 3): ""} dayClick={dayClick}/>
            )): location.pathname === "/october" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 6 ? "" : day < 37 ? (day - 5) : ""} dayClick={dayClick}/>
            )): location.pathname === "/november" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 32 ? (day - 1): ""} dayClick={dayClick}/>
            )): location.pathname === "/december" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 4 ? "" : day < 35 ? (day - 3): ""} dayClick={dayClick}/>
            )): ""}
        </div>
    )
}

export default Days
