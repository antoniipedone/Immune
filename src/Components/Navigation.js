import { NavLink } from 'react-router-dom';

const Navigation = () =>{
    return(
        <nav>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/calendar'>Calendat</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/workout'>Workout</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/profile'>Profile</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/contactdoctor'>Contact doctor</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/receipt'>Receipt</NavLink>
                </li>
                <li className="menu__item">
                    <span>logOut</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;