import { useState } from "react";

const SingleReceipt = props => {
    
    const [active, setActive] = useState();
  
    let receipts = (
        props.list.map( (meal, id) =>{
            return(
                <div className={`receipt ${active === id && "active"}`} onClick={() => setActive(id)} key={id} >
                    <div className="receipt__button">
                        <p className="receipt__date">{`Time ${meal.prep + meal.coock} min`}</p>
                        <h4 className="receipt__name">{meal.name}</h4>
                    </div>
                    <div className="receipt__info" >
                        <img src={meal.img} alt={meal.name} />
                        <p>{`Serves: ${meal.serves}`}</p>
                        <p>{`Preparation: ${meal.prep} min`}</p>
                        <p>{`Coock: ${meal.coock} min`}</p>
                        <h4>Ingredients:</h4>
                        <ul>
                            {meal.ingredients.map( (ingredient, id) => (<li key={id}>{ingredient}</li>))}
                        </ul>
                        <h4>Process:</h4>
                        <ol>
                            {meal.process.map( (fase, id) => (<li key={id}>{fase}</li>))}
                        </ol>
                    </div>
                    
                </div>
            )
        } )
    );

    return (props.list === undefined || props.list.length === 0) ? <p>Nothing selected</p> : receipts ;
}

export default SingleReceipt;