import React, { useState , useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.scss';
import Login from './Components/Login';
import Pages from './Components/Pages/pages';


const App = () => {

  const history = useHistory();
  
  const [allineamento, setAllineamento] = useState({
    name: null,
    gender: null,
    date_of_birth: null,
    NHS_Number: null,
    address: null,
    town: null,
    postcode: null,
    email: null ,
    mobile_number: null,
    isAuth: false
  });

  const users= {
    0: {
      name: "Antonio",
      gender: "Male",
      date_of_birth: "01/05/1991",
      NHS_Number: 51515151,
      address: "Via Vittorio Veneto, 45",
      town: "Grumo Nevano (Napoli)",
      postcode: "80028",
      email: "nikay360@hotmail.it" ,
      mobile_number: "3277088590"
    },
    1: {
      name: "Francesca",
      gender: "Female",
      date_of_birth: "12/01/1988",
      NHS_Number: 51515451,
      address: "Via Frezza, 4",
      town: "Miano (Napoli)",
      postcode: "80012",
      email: "nidda0@hotmail.it" ,
      mobile_number: "3245088590"
    }    
  }; 
  
  useEffect(() => {
    setAllineamento({
      name: null,
      gender: null,
      date_of_birth: null,
      NHS_Number: null,
      address: null,
      town: null,
      postcode: null,
      email: null ,
      mobile_number: null,
      isAuth: false
    });
  },[]);

  const onAuthHandler = authData =>{
    const auth = {
      ...authData,
      id: Math.random().toString()
    };
    for ( let i in users) {
      if (auth.username === users[i].name ) {
        setAllineamento({
          ...users[i],
          isAuth: true
        });
        console.log("Logged");
        console.log(allineamento);
        history.push('/profile');
      
      }
      else{
        console.log("Not Logged");
      }
    }
  };

  return (
    <div className="container">
      <Switch>
        <Route path='/' exact>
          <Login onAuth={onAuthHandler} />
        </Route>
        {(allineamento.isAuth) ? <Pages user={allineamento} /> : <Route><h1>Not logged</h1></Route>}
      </Switch>
    </div>
  );
}

export default App;