import { useState } from 'react';
import DayPicker from 'react-day-picker'; // https://react-day-picker.js.org/


const Calendar = props => {

    const [sort, setSort] = useState(true);
/*

    //// USE FILTER METHOD ///

    let appointments = props.calendar.map( (appointment, id) =>{
        let now = new Date();
        let sorting;
        (sort && now >= appointment.date ) ?  sorting = appointment.data 

        return(
            <span key={id} >
                <p>{sorting.date.toLocaleDateString()}</p>
                <p>{sorting.name}</p>
            </span>
        )
    } )
*/
    return(
        <div>
            <h1>Calendar</h1>
            <div className="calendar">
                <DayPicker 
                     selectedDays />
                <div>
                    <ul className="calendar__switch">
                        <li className="calendar__switch__element calendar__switch__element--active" >Upcoming</li>
                        <li className="calendar__switch__element" >Past</li>
                    </ul>
                    <div className="calendar__appointment">
                        <p className="calendar__appointment__date"> date </p>
                        <p className="calendar__appointment__name"> appointment name </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

 export default Calendar;