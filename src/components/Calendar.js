// import PropTypes from 'prop-types';
import Month from "./Month";
import Reminders from "./Reminders";
// Month Image Imports
import jan_img from '../Images/January_Background.jpg'

const Calendar = ({ currentMonth }) => {
    // const backgroundImage = () => {
    //     switch(currentMonth){
    //         case "January":
    //             return jan_img
    //         default:
    //             throw new Error("Month Not Found")
    //     }
    // }

    return (
        <div id="cal_container" className="calendar_container">
            <Month month={currentMonth} month_img={jan_img}/>
            <Reminders />
        </div>
    )
}

// Calendar.defaultProps = {
//     color: "lightgrey"
// }


export default Calendar
