import Day from "./Day"

import { useLocation } from "react-router-dom"

const Days = () => {
    const location = useLocation()
    // An array with the total number of blocks available for use on the calendar
    let daysArr = [];
    for(let i=1; i < 43; i++){
        daysArr.push(i)
    }
    return (
        // Equations within conditionals act to display the proper number in each block depending on the month
        // The top left block is always considered "day 1", so to make Day 4 ( or any other ), the following takes place
        <div className="days-cont">
            {location.pathname === "/january" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 6 ? "" : day < 37 ? (day-5): ""} />
            )): location.pathname === "/february" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 30 ? (day - 1): ""} />
            )): location.pathname === "/march" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 33 ? (day - 1): ""} />
            )): location.pathname === "/april" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 5 ? "" : day < 35 ? (day - 4): ""} />
            )): location.pathname === "/may" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 7 ? "" : day < 38 ? (day - 6): ""} />
            )): location.pathname === '/june' ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 3 ? "" : day < 33 ? (day - 2): ""} />
            )): location.pathname === "/july" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 5 ? "" : day < 36 ? (day - 4): ""} />
            )): location.pathname === "/august" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 32 ? day : ""} />
            )): location.pathname === "/september" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 4 ? "" : day < 34 ? (day - 3): ""} />
            )): location.pathname === "/october" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 6 ? "" : day < 37 ? (day - 5) : ""} />
            )): location.pathname === "/november" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 2 ? "" : day < 32 ? (day - 1): ""} />
            )): location.pathname === "/december" ? daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 4 ? "" : day < 35 ? (day - 3): ""} />
            )): ""}
        </div>
    )
}

export default Days
