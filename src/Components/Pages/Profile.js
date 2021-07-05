import { useState } from 'react';
import Modal from '../Modal/modal';

const Profile = props => {

    // Variable of modal weekly diet
    const[weekly, setWeekly] = useState(false);
    
    // Handler that send to app.js which pathologies info we neet to send on a modal
    const clicked = info => {   
        props.clicked(info);
    }
    // Handler that change the state of weekly diet
    const weeklyHabdler = () =>{
        setWeekly(prevState => !prevState);
    }   

    return(
        <div>
            <h1>Profile</h1>
            <div className="profile profile--header">
                <img className="profile__img" src={props.user.img} alt="profile img"/>
                <h3 className="profile__name">{props.user.name} {props.user.surname}</h3>
                <p className="profile__text">Gender: {props.user.gender}</p>
                <p className="profile__text">Date of bird: {props.user.birth}</p>
            </div>
            <div className = "profile">
                <div className="profile__box">
                    <h3 className="profile__title">Pathologies</h3>
                    {props.user.pathologies.map( (patologies, id) =>(<p onClick={() => clicked(patologies)} className="profile__text" key={id}>{patologies}</p>))} 
                </div>
                <div className="profile__box">
                    <h3 className="profile__title">Other informations</h3>
                    <p  className="profile__text">NHS #: {props.user.NHS_Number}</p>
                    <p  className="profile__text">email: {props.user.email}</p>
                    <p  className="profile__text">Address: {props.user.address}</p>
                    <p  className="profile__text">Town: {props.user.town}</p>
                    <p  className="profile__text">Postcode: {props.user.postcode}</p>
                </div>
                <div className="profile__tips">
                    {props.user.pathologies.map( (patologies, id) =>(<p onClick={() => clicked(patologies)} className="profile__text" key={id}>More tips</p>))} 
                    <button onClick={weeklyHabdler} >Weekly diet</button>
                </div>
                <Modal show={props.show} clicked={props.clicked} >
                    <h1>{props.modal.type}</h1> 
                    <p>{props.modal.description}</p>
                </Modal>
                <Modal show={weekly} clicked={weeklyHabdler}>
                    <h1>Weekly diet</h1>
                    <div>
                        <p>
                            Monday:<br></br>
                            Breakfast<br></br>
                            Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                            Yogurt Total 0% - Fage 170 g<br></br>
                            Excellence 90% Cocoa - Lindt 30 g<br></br>
                            Coconut - dried 10 g<br></br>
                            Coffee in cup 40 g<br></br>
                            <br></br>
                            Snack<br></br>
                            Dried and oily fruit (average)  20 g<br></br>
                            <br></br>
                            Lunch<br></br>
                            Roasted chicken breast + salad with lettuce , arugula and lemon Chicken - chest 160 g<br></br>
                            Lettuce 250 g<br></br>
                            Rocket 30 g<br></br>
                            Extra virgin olive oil 20 g<br></br>

                            Snack<br></br>
                            Parmesean 20 g<br></br>
                            <br></br>
                            Dinner<br></br>
                            Vegetable omelette with two eggs and parmesan
                            <br></br>
                            Hen eggs - whole 120 g
                            Grated Parmesan cheese 15 g
                            Fresh vegetables (average)  200 g
                            Extra virgin olive oil 20 g
                            <br></br>
                        Tuesday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Dried and oily fruit (average)  20 g Excellence 90% Cocoa - Lindt 20 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Mozzarella 130 g<br></br>
                        Lettuce 200 g<br></br>
                        Tomato salad 100 g<br></br>
                        Rughetta or rucola 50 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Parmigiano 20 g<br></br>
                        <br></br>
                        Dinner
                        Turkey breast 150 g<br></br>
                        Fresh vegetables (average)  200 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Wednesday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Snack <br></br>
                        Hazelnuts - dry 20 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Zucchini and Parmesan omelette 320 g<br></br>
                        Lettuce 200 g<br></br>
                        Extra virgin olive oil 20 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Excellence 90% Cocoa - Lindt 20 g <br></br>
                        <br></br>
                        Dinner<br></br>
                        Fresh bream 150 g<br></br>
                        Lettuce 200 g<br></br>
                        Carrots 200 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Ingredients Recipes<br></br>
                        Ingredients for 320 g of Zucchini and Parmesan omelette<br></br>
                        Hen eggs - whole 60 g<br></br>
                        Hen eggs - egg white 100 g<br></br>
                        Courgettes 150 g<br></br>
                        Grated Parmesan cheese 10 g<br></br>
                        <br></br>
                        Thursday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Sweet almonds - dry 20 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Bresaola 100 g or Parma ham 130 g<br></br>
                        Rocket 100 g<br></br>
                        Lettuce 200 g<br></br>
                        Grain 20 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Excellence 90% Cocoa - Lindt 20 g Sweet almonds - dry 20 g<br></br>
                        <br></br>
                        Dinner<br></br>
                        Baked swordfish with walnut salad and lettuce<br></br>
                        Swordfish 150 g<br></br>
                        Lettuce 200 g<br></br>
                        Walnuts - dry 10 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Friday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Sweet almonds - dry 20 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Salmon - smoked 100 g Tuna fillets <br></br>
                        Fresh vegetables (average)  200 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Parmesan 20 g<br></br>
                        <br></br>
                        Dinner<br></br>
                        Roasted melenzane rolls with ricotta cheese<br></br>
                        Season the ricotta with pepper, fresh basil and oil; mix everything and form cold rolls with roasted melenzane<br></br>
                        Cow’s ricotta 150 g<br></br>
                        Aubergines 200 g<br></br>
                        Fresh vegetables (average)  200 g<br></br>
                        Extra virgin olive oil 15 g<br></br>
                        <br></br>
                        Saturday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Aequilibrium Oven Turkey Breast - The Hague 150 g<br></br>
                        Fresh green beans 200 g<br></br>
                        Carrots 100 g<br></br>
                        Extra virgin olive oil 20 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Excellence 90% Cocoa - Lindt 20 g<br></br>
                        <br></br>
                        Dinner <br></br>
                        Cut beef , grit and vegetables<br></br>
                        Beef (average)  180 g<br></br>
                        Grain 20 g<br></br>
                        Lettuce 200 g<br></br>
                        Extra virgin olive oil 20 g<br></br>
                        <br></br>
                        Sunday<br></br>
                        Breakfast<br></br>
                        Melt the dark chocolate in a bain-marie or in the microwave oven, mix inside the yogurt with the coconut Rapè and place the fridge for at least one night<br></br>
                        Yogurt Total 0% - Fage 170 g<br></br>
                        Excellence 90% Cocoa - Lindt 30 g<br></br>
                        Coconut - dried 10 g<br></br>
                        Coffee in cup 40 g<br></br>
                        <br></br>
                        Lunch<br></br>
                        Pig – leg 180 g<br></br>
                        Shrimp 250 g<br></br>
                        Lettuce 200 g<br></br>
                        Chicken leg - without skin 200 g<br></br>
                        Extra virgin olive oil 20 g<br></br>
                        <br></br>
                        Snack<br></br>
                        Excellence 90% Cocoa - Lindt 20 g <br></br>
                        <br></br>
                        Dinner<br></br>
                        Cooked ham - lean 150 g<br></br>
                        Fresh vegetables (average)  200 g<br></br>
                        Fennel 100 g<br></br>
                        Extra virgin olive oil 20 g<br></br>
                        </p>
                    </div>
                </Modal>
            </div>
        </div>
        
    );
}

export default Profile;