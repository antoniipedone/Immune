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
            <br></br>
            <h3>Message:</h3>
            {(messages) && Object.values(messages).map((message, id) => {
                return(
                    <div className="receipt">
                    <div key={id}>
                        <h4>{message.user}</h4>
                        <p className="receipt__date">{message.date}</p>
                        <p>{message.message}</p>
                    </div>     
                    </div>               
                );
            })}

        </div>
    );
}

export default Admin;