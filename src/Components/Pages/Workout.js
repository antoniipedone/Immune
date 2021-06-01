import Card from '../card';

const Workout = props => {
    return(
        <div>
            <h1>Workout of {props.user.name}</h1>
            {props.lessions.map( (card, id) =>(<Card name={card.title} link={card.link} img={card.img} key={id} />))} 
        </div>
    );
}

export default Workout;