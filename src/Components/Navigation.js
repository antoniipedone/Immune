import { NavLink } from 'react-router-dom';
import account from '../Assets/imgs/icons/profilo.svg';
import ricette from '../Assets/imgs/icons/ricette.svg';
import contact from '../Assets/imgs/icons/contact.svg';
import calendario from '../Assets/imgs/icons/calendario.svg';
import workout from '../Assets/imgs/icons/workout.svg'
const Navigation = props =>{
    return(
        <nav>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/calendar'><img src={calendario}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/workout'><img src={workout}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/profile'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/contactdoctor'><img src={contact}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/receipt'><img src={ricette}></img></NavLink>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__item__link" onClick={props.logout}><img src={account} /></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;