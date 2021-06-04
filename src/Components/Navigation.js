import { NavLink } from 'react-router-dom';
import account from '../Assets/imgs/icons/profilo.svg';
import ricette from '../Assets/imgs/icons/ricette.svg';
import contact from '../Assets/imgs/icons/contact.svg';
import calendario from '../Assets/imgs/icons/calendario.svg';
import workout from '../Assets/imgs/icons/workout.svg'
import logout from '../Assets/imgs/icons/logout.svg'
const Navigation = props =>{
    return(
        <nav>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/calendar'><img src={calendario} alt="calendario button" /></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/workout'><img src={workout} alt="workout button" /></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/profile'><img src={account} alt="profile button" /></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/contactdoctor'><img src={contact} alt="contact doctor button" /></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/receipt'><img src={ricette} alt="receipt button" /></NavLink>
                </li>
                <li className="menu__item">
                    <button type="button" onClick={props.logout}><img src={logout} alt="log out button" /></button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;