import { useState } from "react"


const Reminders = ({ addReminder }) => {
    const [text, setText] = useState("")
    return (
        <div className="r-cont" style={{borderLeft: "2px dashed black"}}>
            <h2>Reminders</h2>
            <input type="text" className="remind-inp" placeholder="Type a Reminder" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button id="remind_btn" className="sm-btn btn-info" onClick={()=>{addReminder(text);setText("")}}>Add Reminder</button>
            <ol id="r_list"></ol>
        </div>
    )
}

export default Reminders
