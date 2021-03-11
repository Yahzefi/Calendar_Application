

const Pagination = ({ navClick, bgColor }) => {

    
    return (
        <div id="page_navigation" className="pg-nav">
            {/* This will eventually be routes instead of anchor tags */}
            <span id="m-1" onClick={(e)=>navClick(e)}>Jan</span>
            <span id="m-2" onClick={(e)=>navClick(e)}>Feb</span>
            <span id="m-3" onClick={(e)=>navClick(e)}>Mar</span>
            <span id="m-4" onClick={(e)=>navClick(e)}>Apr</span>
            <span id="m-5" onClick={(e)=>navClick(e)}>May</span>
            <span id="m-6" onClick={(e)=>navClick(e)}>Jun</span>
            <span id="m-7" onClick={(e)=>navClick(e)}>Jul</span>
            <span id="m-8" onClick={(e)=>navClick(e)}>Aug</span>
            <span id="m-9" onClick={(e)=>navClick(e)}>Sep</span>
            <span id="m-10" onClick={(e)=>navClick(e)}>Oct</span>
            <span id="m-11" onClick={(e)=>navClick(e)}>Nov</span>
            <span id="m-12" onClick={(e)=>navClick(e)}>Dec</span>
        </div>
    )
}

export default Pagination
