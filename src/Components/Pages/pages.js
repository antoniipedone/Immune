import { Fragment } from "react";
import { Route } from "react-router-dom";

import Navigation from '../Navigation';
import Profile from '../Pages/Profile';
import Calendar from '../Pages/Calendar';
import Receipt from '../Pages/Receipt';
import Workout from '../Pages/Workout';
import ContactDoctor from '../Pages/ContactDoctor';

const Pages = props =>{
    return(
        <Fragment>
            <Navigation logout={props.logout} />
            <Route path='/calendar'>
                <Calendar user={props.user} />
            </Route>
            <Route path='/workout'>
                <Workout user={props.user} lessions={props.workout}/>
            </Route>
            <Route path='/profile'>
                <Profile user={props.user} show={props.show} clicked={props.clicked} modal={props.modal} />
            </Route>
            <Route path='/contactdoctor'>
                <ContactDoctor user={props.user} />
            </Route>
            <Route path='/receipt'>
                <Receipt user={props.user} receipt={props.receipt} />
            </Route>
        </Fragment>
    );
}

export default Pages;
