
// Component Imports
import Days from "./Days"

const Month = ({ month, month_img }) => {
    return (
        <div className="m-cont">
            <div className="img-cont">
                <img className="m-bg" src={month_img} alt=""  />
                <h1 id="month_text" className="m-text">{month}</h1>
            </div>
            <Days />
        </div>
    )
}

Month.defaultProps = {
    month: "January"
}

export default Month
