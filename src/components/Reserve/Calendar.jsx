import React from "react";
import ReactCalendar from 'react-calendar'

export default function Calendar(){
    return(
        <div>
            <ReactCalendar minDate={new Date()}
            className = 'REACT-CALENDAR p-2' 
            view='month' 
            onClickDay={(date)=> console.log(date)}
            />
        </div>
    )
}
