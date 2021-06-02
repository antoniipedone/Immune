const Card = props =>{
    return(
        <a className="card" href={props.link} target="_blank" rel="noopener noreferrer">
                <p className="card__title">{props.name}</p>
                <img className="card___img" src={props.img} alt={props.name} />
        </a>
    );
}
export default Card;