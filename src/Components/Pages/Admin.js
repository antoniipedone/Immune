import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () =>{
    
    const[messages, setMessages] = useState();

    useEffect(() => {
        axios
        .get("https://immune-2fd1f-default-rtdb.europe-west1.firebasedatabase.app/doctorMessage.json")
        .then(response => setMessages(response.data))
        .catch(error => console.error(error));
    },[]);

    return(
        <div>
            <h1>Latest messages</h1>
            <h3>Message:</h3>
            {(messages) && Object.values(messages).map((message, id) => {
                return(
                    <span key={id}>
                        <h4>{message.user}</h4>
                        <p>{message.date}</p>
                        <p>{message.message}</p>
                    </span>                    
                );
            })}

        </div>
    );
}

export default Admin;