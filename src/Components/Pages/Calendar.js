import DayPicker from 'react-day-picker'; // https://react-day-picker.js.org/


const Calendar = props => {

    let appointments = props.user.appointments.map( (appointment, id) =>{

        return(
            <div className="calendar__appointment" key={id} >
                <p className="calendar__appointment__date">{appointment.date.toLocaleDateString()}</p>
                <p className="calendar__appointment__name">{appointment.title}</p>
            </div>
        )
    } );
    
    
    return(
        <div>
            <h1>Calendar</h1>
            <div className="calendar">
                <DayPicker 
                     selectedDays={props.user.appointments.flatMap(x => new Date(x.date))} />
                <div>
                    <ul className="calendar__switch">
                        <li className="calendar__switch__element calendar__switch__element--active" >Upcoming</li>
                        <li className="calendar__switch__element" >Past</li>
                    </ul>
                    {appointments}
                </div>
            </div>
        </div>
    );
}

 export default Calendar;