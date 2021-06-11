import { useState } from 'react';
import axios from 'axios';

const ContactDoctor = props => {
    
    const[message, setMessage] = useState("");
    
    const onchangeHand = event =>{
        console.log(event.target.value);
        setMessage(event.target.value);
    }
    
    const submitHandler = event =>{
        const sender = {
            user: props.user.name,
            date: new Date().toString(),
            message: message
        };
        axios.post('https://immune-2fd1f-default-rtdb.europe-west1.firebasedatabase.app/doctorMessage.json', sender)
        .then(response => {
            alert("Message sent");
        })
        .catch(error => console.error(error));
        event.preventDefault();
    }

    return(
        <div>
            <h1>Contact doctor</h1>
            <div className="doctor__header">
                <img className="doctor__img" alt="doc_img" src="data:image/jpeg;base64,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"/>
                <div className="doctor__header--info">
                    <h2 className="doctor__name">Doctor name</h2>
                    <p className="doctor__spec">GP</p>
                    <p className="doctor__address">Address</p>
                    <p className="doctor__address">Address</p>
                </div>
            </div>
            <form className="doctor__form" onSubmit={submitHandler}>
                <textarea type="textarea" placeholder="Send a message to doctor." className="doctor__form__input" value={message} onChange={onchangeHand} />
                <input type="submit" value="Send Message" className="doctor__form__submit" />
            </form>
        </div>
        );
}

export default ContactDoctor;