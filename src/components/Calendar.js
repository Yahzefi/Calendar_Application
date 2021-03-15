import Month from "./Month";
import Reminders from "./Reminders";

import { useState } from "react"

const Calendar = () => {
    return (
        <div id="cal_container" className="calendar_container">
            <Month />
            <Reminders />
        </div>
    )
}

export default Calendar
