import Card from '../card';

const Workout = props => {
    return(
        <div class="workout">
            <h1>Workout of {props.user.name}</h1>
            <div class="workout__container">
            {props.lessions.map( (card, id) =>(<Card name={card.title} link={card.link} img={card.img} key={id} />))} 
            </div>
        </div>
    );
}

export default Workout;