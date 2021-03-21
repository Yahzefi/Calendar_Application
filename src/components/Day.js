
const Day = ({ dayNumber, dayClick }) => {
    return (
        <div id={"Day " + dayNumber} className="day-cont" style={{border: "thin solid black"}} onClick={dayClick}>
            <p>{dayNumber}</p>
        </div>
    )
}

export default Day
