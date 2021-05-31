import { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";

const Pages = props =>{
    return(
        <Fragment>
            {/*NAVBAR*/}
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName={'menu'} to='/profile'>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={'menu'} to='/calendar'>Calendat</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={'menu'} to='/workout'>Workout</NavLink>
                        </li>
                        <li>
                            <span>logOut</span>
                        </li>
                    </ul>
                </nav>
            </header>
            <Route path='/profile'>
                <h1>Profile</h1>
                <p>Name: {props.user.name}</p>
                <p>Gender :{props.user.gender}</p>
                <p>Date of bird: {props.user.date_of_bird}</p>
                <p>NHS #: {props.user.NHS_Number}</p>
                <p>Address: {props.user.address}</p>
                <p>Town: {props.user.town}</p>
                <p>Postcode: {props.user.postcode}</p>
                <p>email: {props.user.email}</p>
            </Route>
            <Route path='/calendar'>
                <h1>Calendar of {props.user.name}</h1>
            </Route>
            <Route path='/workout'>
                <h1>workout of {props.user.name}</h1>
            </Route>
        </Fragment>
    );
}

export default Pages;
