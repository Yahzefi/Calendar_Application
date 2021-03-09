import Days from "./Days"

const Month = () => {
    return (
        <div className="m-cont" style={{border: "thin solid white"}}>
            {/* h2 below will be deleted later on */}
            <h2 style={{gridRow:"1/1"}}>Month</h2>
            <div className="img-cont">
                <h4>Image Goes Here</h4>
            </div>
            <Days />
        </div>
    )
}

export default Month
