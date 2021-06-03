import { useState } from "react"

const Receipt = props => {

    
    const [search, setSearch] = useState("Search");

    const searchHandler = event =>{
        setSearch(event.target.value);
    }

    return(
        <div>
            <h1>Receipt for {props.user.name}</h1>
            <input className="searchBar" type="text" placeholder={search} onChange={searchHandler}/>
            <ul className="receipt__header">
                <li className="receipt__header__element calendar__switch__element--active">
                    <p>Primo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Secondo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Contorno</p>
                </li>
            </ul>
            {props.receipt.map( (meal, id) =>{
                // some logic for => primo - secondo - contorno
                return(
                    <div className="receipt" key={id} >
                        <div className="receipt__button">
                            <p className="receipt__date">{meal.date.toLocaleDateString()}</p>
                            <h4 className="receipt__name">{meal.name}</h4>
                        </div>
                        
                        <p className="receipt__info">{meal.information}</p>
                    </div>
                )
            } )}            
        </div>
        
    );
}

export default Receipt;