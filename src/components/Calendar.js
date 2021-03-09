import PropTypes from 'prop-types';

const Calendar = ({ color, onToggle }) => {
    return (
        <div style={{backgroundColor: color}} className="calendar_container" onClick={()=>onToggle()}>
            
        </div>
    )
}

Calendar.defaultProps = {
    color: "lightgrey"
}

export default Calendar
