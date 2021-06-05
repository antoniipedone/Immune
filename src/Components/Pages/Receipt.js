import { useState } from "react";
import Select from 'react-select';

import SingleReceipt from '../singleReceipt';

const Receipt = props => {

    const receipts = props.receipt.filter(x => props.user.pathologies.includes(x.type));
    
    const [list, setList] = useState(receipts);
     
    return(
        <div>   
            <Select
                options={receipts}
                defaultValue={receipts}
                isMulti 
                onChange={value => setList(value)} />
            <SingleReceipt list={list} />
        </div>  
    );
}

export default Receipt;