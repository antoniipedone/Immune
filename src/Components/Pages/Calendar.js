import { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

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
                        <li className="calendar__switch__element--active" >Upcoming</li>
                        <li className="calendar__switch__element" >Past</li>
                    </ul>
                    <span className="calendar__oppointment">
                        <p className="calendar__oppointment__date"> date </p>
                        <p className="calendar__oppointment__name"> appointment name </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

 export default Calendar;