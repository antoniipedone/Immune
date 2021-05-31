const Profile = props => {
    return(
        <div>
            <h1>Profile</h1>
            <p>Name: {props.user.name}</p>
            <p>Gender :{props.user.gender}</p>
            <p>Date of bird: {props.user.date_of_bird}</p>
            <p>NHS #: {props.user.NHS_Number}</p>
            <p>Address: {props.user.address}</p>
            <p>Town: {props.user.town}</p>
            <p>Postcode: {props.user.postcode}</p>
            <p>email: {props.user.email}</p>
        </div>
        
    );
}

export default Profile;