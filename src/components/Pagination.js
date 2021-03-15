import { Link } from 'react-router-dom'
import { useState } from 'react'

const Pagination = () => {
    const [currentMonth, makeActive] = useState("January");

    
    return (
        <div id="page_navigation" className="pg-nav">
            <Link to='/january' style={currentMonth === 'January' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("January")}>Jan</Link>
            <Link to='/february'style={currentMonth === 'February' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("February")}>Feb</Link>
            <Link to='/march'style={currentMonth === 'March' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("March")}>Mar</Link>
            <Link to='/april'style={currentMonth === 'April' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("April")}>Apr</Link>
            <Link to='/may'style={currentMonth === 'May' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("May")}>May</Link>
            <Link to='/june'style={currentMonth === 'June' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("June")}>Jun</Link>
            <Link to='/july'style={currentMonth === 'July' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("July")}>Jul</Link>
            <Link to='/august'style={currentMonth === 'August' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("August")}>Aug</Link>
            <Link to='/september'style={currentMonth === 'September' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("September")}>Sep</Link>
            <Link to='/october'style={currentMonth === 'October' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("October")}>Oct</Link>
            <Link to='/november'style={currentMonth === 'November' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("November")}>Nov</Link>
            <Link to='/december' style={currentMonth === 'December' ? {backgroundColor: "green"} : {backgroundColor: ""}} onClick={()=>makeActive("December")}>Dec</Link>
        </div>
    )
}

export default Pagination
