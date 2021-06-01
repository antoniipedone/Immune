const Profile = props => {
    // update
    return(
        <div>
            <h1>Profile</h1>
            <div className="profile">
                <img className="profile__img" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png" />
                <h3 className="profile__name">{props.user.name} {props.user.surname}</h3>
                <p className="profile__text">Gender: {props.user.gender}</p>
                <p className="profile__text">Date of bird: {props.user.birth}</p>
            </div>
            <div>
                <h2 className="profile__title">Pathologies</h2>
                {props.user.pathologies.map( (patologies, id) =>(<p className="profile__text" key={id}>{patologies}</p>))} 
                <h2 className="profile__title">Other informations</h2>
                <p  className="profile__text">NHS #: {props.user.NHS_Number}</p>
                <p  className="profile__text">email: {props.user.email}</p>
                <p  className="profile__text">Address: {props.user.address}</p>
                <p  className="profile__text">Town: {props.user.town}</p>
                <p  className="profile__text">Postcode: {props.user.postcode}</p>
            </div>
        </div>
        
    );
}

export default Profile;