import { NavLink } from 'react-router-dom';
import account from '../Assets/imgs/account.svg';
const Navigation = () =>{
    return(
        <nav>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/calendar'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/workout'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/profile'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/contactdoctor'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink activeClassName={'menu__item__link'} to='/receipt'><img src={account}></img></NavLink>
                </li>
                <li className="menu__item">
                    <span>logOut</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;