import { useState } from "react";
import ReactSimpleOptionsSelector from "react-simple-options-selector"; // https://github.com/ankithkonda/react-simple-options-selector

const Receipt = props => {

    
    const [search, setSearch] = useState("Search");
    
    const receiptList = [
            {
                name: "",
                img: "",
                tag: "",
                prep: "",
                coock: "",
                serves: "",
                ingredients: [],
                process: []    
            },
            {
                name: "",
                img: "",
                tag: "",
                prep: "",
                coock: "",
                serves: "",
                ingredients: [],
                process: []    
            },
            {
                name: "",
                img: "",
                tag: "",
                prep: "",
                coock: "",
                serves: "",
                ingredients: [],
                process: []    
            }
    ];

    const CustomOptions = [ //dinamic add of principar ingredients 
        "Some",
        "Other",
        "Options",
        "To",
        "Select"
    ];

    const searchHandler = event =>{
        setSearch(event.target.value);
    };

    const foodHandler = (name, selected) => {
        console.log(selected);
        // add selected on receipt filter
    };

    let receipts = props.receipt.map( (meal, id) =>{
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
    } );     

    return(
        <div>
            <h1>Receipt for {props.user.name}</h1>
            <input className="searchBar" type="text" placeholder={search} onChange={searchHandler}/>
            <ReactSimpleOptionsSelector 
            	name="ingredients filter"
                type="checkbox"
                onSelectionChange={foodHandler}
	            options={
	            	CustomOptions.map((value, index)=>{
	            		return {
	            			id:value,
	            			label:value,
	            			selected:(index === 2) ? true:false        
	            		}
	            	})
	            }

            />

                {/* <ul className="receipt__header">
                <li className="receipt__header__element calendar__switch__element--active">
                    <p>Primo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Secondo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Contorno</p>
                </li>
                </ul> */}
            
            {receipts}     
        </div>
        
    );
}

export default Receipt;