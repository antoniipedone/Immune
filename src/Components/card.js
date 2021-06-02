const Card = props =>{
    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="card">
                <p className="card__title">{props.name}</p>
                <img className="card___img" src={props.img} alt={props.name} />
            </div>
        </a>
    );
}
export default Card;