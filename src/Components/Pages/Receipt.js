import { useState } from "react";
import Select from 'react-select';

import SingleReceipt from '../singleReceipt';

const Receipt = props => {

    const [list, setList] = useState([]);
     
    const searchHandler = event =>{
        setList(event); 
    };

    return(
        <div>   
            <Select
                options={props.receipt.filter(x => props.user.pathologies.includes(x.type))}
                isMulti 
                onChange={value => searchHandler(value)} />
            <SingleReceipt list={list} />
        </div>  
    );
}

export default Receipt;