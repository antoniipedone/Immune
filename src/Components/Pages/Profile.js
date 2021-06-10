import { useState } from 'react';
import Modal from '../Modal/modal';

const Profile = props => {

    const[weekly, setWeekly] = useState(false);
    
    const clicked = info => {
        props.clicked(info);
    }
    const weeklyHabdler = () =>{
        setWeekly(prevState => !prevState);
    }   

    console.log(props.modal);
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
                <div className="profile__box">
                    <button onClick={weeklyHabdler} >weekly diet</button>
                </div>
                <Modal show={props.show} clicked={props.clicked} >
                    <h2>{props.modal.type}</h2> 
                    <p>{props.modal.description}</p>
                </Modal>
                <Modal show={weekly} clicked={weeklyHabdler}>
                    <h1>Weekly diet</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </Modal>
            </div>
        </div>
        
    );
}
// https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png
export default Profile;