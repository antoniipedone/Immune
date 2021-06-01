import { useState } from 'react';
import Calen from 'react-calendar'; // https://github.com/wojtekmaj/react-calendar#readme

import 'react-calendar/dist/Calendar.css';

const Calendar = props => {

    const [sort, setSort] = useState(true);
/*
    let appointments = props.calendar.map( (appointment, id) =>{
        let now = new Date();
        let sorting;
        (sort && now >= appointment.date ) ?  sorting = appointment.data 

        return(
            <span key={id} >
                <p>{appointment.date.toLocaleDateString()}</p>
                <p>{appointment.name}</p>
            </span>
        )
    } )
*/
    return(
        <div>
            <h1>Calendar</h1>
            <div className="calendar">
                <Calen 
                    className="react-calendar" />
                <div>
                    <ul className="calendar__switch">
                        <li className="calendar__switch__element--active" >Upcoming</li>
                        <li className="calendar__switch__element" >Past</li>
                    </ul>
                    <span>
                        <p> date </p>
                        <p> appointment name </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

 export default Calendar;