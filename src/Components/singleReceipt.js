const singleReceipt = props => {

    let receipts = (
        props.list.map( (meal, id) =>{
            return(
                <div className="receipt active" key={id} >
                    <div className="receipt__button">
                        <p className="receipt__date">{`Time ${meal.prep + meal.coock} min`}</p>
                        <h4 className="receipt__name">{meal.name}</h4>
                    </div>
                    <p className="receipt__info">{`Serves: ${meal.serves}`}</p>
                    <p className="receipt__info">{`Preparation: ${meal.prep} min`}</p>
                    <p className="receipt__info">{`Coock: ${meal.coock} min`}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        {meal.ingredients.map( (ingredient, id) => (<li key={id}>{ingredient}</li>))}
                    </ul>
                    <h4>Process:</h4>
                    <ol>
                        {meal.process.map( (fase, id) => (<li key={id}>{fase}</li>))}
                    </ol>
                </div>
            )
        } )
    );

    return (props.list === undefined || props.list.length === 0) ? <p>Nothing selected</p> : receipts ;
}

export default singleReceipt;