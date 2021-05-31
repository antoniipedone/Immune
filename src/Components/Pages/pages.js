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
            <Navigation />
            <Route path='/calendar'>
                <Calendar user={props.user} />
            </Route>
            <Route path='/workout'>
                <Workout user={props.user} />
            </Route>
            <Route path='/profile'>
                <Profile user={props.user} />
            </Route>
            <Route path='/contactdoctor'>
                <ContactDoctor user={props.user} />
            </Route>
            <Route path='/receipt'>
                <Receipt user={props.user} />
            </Route>
        </Fragment>
    );
}

export default Pages;
