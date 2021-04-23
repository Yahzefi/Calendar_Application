import Month from "./Month";
import Reminders from "./Reminders";

const Calendar = () => {
    // addReminder passed up from Reminders.js
    const addReminder = (text) => {
        let r_list = document.getElementById("r_list");
        let newReminder = document.createElement('li');
        newReminder.setAttribute("class", "r-list-items")
        newReminder.textContent = text;
        r_list.appendChild(newReminder);
    }
    return (
        <div id="cal_container" className="calendar_container">
            <Month />
            <Reminders addReminder={(text)=>addReminder(text)}/>
        </div>
    )
}

export default Calendar
