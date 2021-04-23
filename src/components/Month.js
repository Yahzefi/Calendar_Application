
import { useLocation } from 'react-router-dom'

import Weekdays from "./Weekdays"
import Days from "./Days"

import { MONTH_BACKGROUNDS } from "../Images/images"

const Month = () => {
    const location = useLocation()
    return (
        // Changes the background image behind the month's name depending on the page location
        <div className="m-cont">
            <div className="img-cont">
                {location.pathname === '/january' ? 
                <img className="m-bg" src={MONTH_BACKGROUNDS.January} alt=""  />
                : location.pathname === '/february' ? 
                <img className="m-bg"  src={MONTH_BACKGROUNDS.February} alt=""  />
                : location.pathname === '/march' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.March} alt=""  />
                : location.pathname === '/april' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.April} alt=""  />
                : location.pathname === '/may' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.May} alt=""  />
                : location.pathname === '/june' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.June} alt=""  />
                : location.pathname === '/july' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.July} alt=""  />
                : location.pathname === '/august' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.August} alt=""  />
                : location.pathname === '/september' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.September} alt=""  />
                : location.pathname === '/october' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.October} alt=""  />
                : location.pathname === '/november' ?
                <img className="m-bg" src={MONTH_BACKGROUNDS.November} alt=""  />
                : location.pathname === '/december' &&
                <img className="m-bg" src={MONTH_BACKGROUNDS.December} alt=""  />
            }
            {/* Changes the text color of the month's title depending on the page location */}
            {location.pathname === '/january' ? 
            <h1 id="month_text" className="m-text">January</h1>
            : location.pathname === '/february' ?
            <h1 id="month_text" className="m-text" style={{color:"pink"}}>February</h1>
            : location.pathname === '/march' ?
            <h1 id="month_text" className="m-text" style={{color:"lightgreen"}}>March</h1>
            : location.pathname === '/april' ?
            <h1 id="month_text" className="m-text" style={{color:"blue"}}>April</h1>
            : location.pathname === '/may' ?
            <h1 id="month_text" className="m-text" style={{color:"yellowgreen"}}>May</h1>
            : location.pathname === '/june' ?
            <h1 id="month_text" className="m-text" style={{color: "yellow"}}>June</h1>
            : location.pathname === '/july' ?
            <h1 id="month_text" className="m-text" style={{color:"darkred"}}>July</h1>
            : location.pathname === '/august' ?
            <h1 id="month_text" className="m-text" style={{color:"darkorange"}}>August</h1>
            : location.pathname === '/september' ?
            <h1 id="month_text" className="m-text" style={{color:"brown"}}>September</h1>
            : location.pathname === '/october' ?
            <h1 id="month_text" className="m-text" style={{color:"orange"}}>October</h1>
            : location.pathname === '/november' ?
            <h1 id="month_text" className="m-text" style={{color:"orangered"}}>November</h1>
            : location.pathname === '/december' &&
            <h1 id="month_text" className="m-text" style={{color:"darkgreen"}}>December</h1>
            }
            </div>
            <Weekdays />
            <Days />
        </div>
    )
}

Month.defaultProps = {
    month: "January"
}

export default Month
