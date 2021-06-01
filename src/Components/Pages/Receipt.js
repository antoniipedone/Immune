import { useState } from "react"

const Receipt = props => {

    
    const [search, setSearch] = useState("Search");

    const searchHandler = event =>{
        setSearch(event.target.value);
    }

    return(
        <div>
            <h1>Receipt</h1>

            <input className="searchBar" type="text" value={search} onChange={searchHandler}/>
            {/* Tabs => Primi - Secondi - Contorni */}
            {props.receipt.map( (meal, id) =>{

                return(
                    <span key={id} >
                        <p>{meal.date}</p>
                        <p>{meal.name}</p>
                        <span><img /> span activate more informations</span>
                        <p>receipt informations</p>
                    </span>
                )
            } )}            
        </div>
        
    );
}

export default Receipt;