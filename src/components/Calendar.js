// import PropTypes from 'prop-types';
import Month from "./Month";
import Reminders from "./Reminders";

const Calendar = () => {

    return (
        <div id="cal_container" className="calendar_container">
            <Month />
            <Reminders />
        </div>
    )
}

// Calendar.defaultProps = {
//     color: "lightgrey"
// }

export default Calendar
