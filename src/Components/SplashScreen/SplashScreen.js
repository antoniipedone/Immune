import { useEffect, useState } from "react";

import logo from "../../Assets/imgs/icons/splash_logo.png"

const SplashScreen = props =>{

    const [load, setLoad] = useState(true);

    // timeot for splash screen

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 2000);
    },[]);
    
    const splash = (
        <div className="splash">
            <img className="splash__img" src={logo} alt="immune logo" />
            <div className="splash__dot">.</div>
        </div>
    )
    return load ? splash  : props.children;
}

export default SplashScreen;