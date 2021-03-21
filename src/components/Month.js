
import { useLocation } from 'react-router-dom'

import Weekdays from "./Weekdays"
import Days from "./Days"

import { MONTH_BACKGROUNDS } from "../Images/images"

const Month = ({ dayClick }) => {
    const location = useLocation()
    return (
        <div className="m-cont">
            <div className="img-cont">
                {location.pathname === '/january' ? 
                <img className="m-bg" src={MONTH_BACKGROUNDS.January} alt=""  />
                : location.pathname === '/february' ? 
                <img className="m-bg"  alt=""  />
                : location.pathname === '/march' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/april' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/may' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/june' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/july' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/august' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/september' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/october' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/november' ?
                <img className="m-bg"  alt=""  />
                : location.pathname === '/december' &&
                <img className="m-bg"  alt=""  />
            }
            {location.pathname === '/january' ? 
            <h1 id="month_text" className="m-text">January</h1>
            : location.pathname === '/february' ?
            <h1 id="month_text" className="m-text">February</h1>
            : location.pathname === '/march' ?
            <h1 id="month_text" className="m-text">March</h1>
            : location.pathname === '/april' ?
            <h1 id="month_text" className="m-text">April</h1>
            : location.pathname === '/may' ?
            <h1 id="month_text" className="m-text">May</h1>
            : location.pathname === '/june' ?
            <h1 id="month_text" className="m-text">June</h1>
            : location.pathname === '/july' ?
            <h1 id="month_text" className="m-text">July</h1>
            : location.pathname === '/august' ?
            <h1 id="month_text" className="m-text">August</h1>
            : location.pathname === '/september' ?
            <h1 id="month_text" className="m-text">September</h1>
            : location.pathname === '/october' ?
            <h1 id="month_text" className="m-text">October</h1>
            : location.pathname === '/november' ?
            <h1 id="month_text" className="m-text">November</h1>
            : location.pathname === '/december' &&
            <h1 id="month_text" className="m-text">December</h1>
            }
            </div>
            <Weekdays />
            <Days dayClick={dayClick}/>
        </div>
    )
}

Month.defaultProps = {
    month: "January"
}

export default Month
