import Month from "./Month";
import Reminders from "./Reminders";

const Calendar = () => {
    const clickDay = (e) => {
        console.log(e.target.id)
    }
    return (
        <div id="cal_container" className="calendar_container">
            <Month dayClick={(e)=>clickDay(e)}/>
            <Reminders />
        </div>
    )
}

export default Calendar
