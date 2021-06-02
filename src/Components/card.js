const Card = props =>{
    return(
        <a className="card" href={props.link} target="_blank" rel="noopener noreferrer">
                <h3 className="card__title">{props.name}</h3>
                <img className="card__img" src={props.img} alt={props.name} />
        </a>
    );
}
export default Card;