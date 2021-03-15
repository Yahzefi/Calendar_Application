import Day from "./Day"

const Days = () => {
    let daysArr = [];
    for(let i=1; i < 36; i++){
        daysArr.push(i)
    }
    return (
        <div className="days-cont">
            {daysArr.map((day)=>(
                <Day key={"Day " + day} dayNumber={day < 32 ? day : ""}/>
            ))}
        </div>
    )
}

export default Days
