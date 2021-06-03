import React, { useState , useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.scss';
import Login from './Components/Login';
import Pages from './Components/Pages/pages';

import workoutImage1 from './Assets/imgs/workout/workout1.svg';
import workoutImage2 from './Assets/imgs/workout/workout2.svg';
import workoutImage3 from './Assets/imgs/workout/workout3.svg';
import workoutImage4 from './Assets/imgs/workout/workout4.svg';

import profileImage1 from './Assets/imgs/profile/free-profile-photo-whatsapp-4.png';




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

  const [videoLession, setVideoLession] = useState([
    {
      title: "Training 1",
      img: workoutImage1,
      link:"https://www.youtube.com/watch?v=UItWltVZZmE"
    },
    {
      title: "Training 2",
      img: workoutImage2,
      link:"https://www.youtube.com/watch?v=g_tea8ZNk5A"
    },
    {
      title: "Training 3",
      img: workoutImage3,
      link:"https://www.youtube.com/watch?v=8DZktowZo_k"
    },
    {
      title: "Training 4",
      img: workoutImage4,
      link:"https://www.youtube.com/watch?v=GLy2rYHwUqY"
    }
  ]);

  const receipt = [
    {
      name:"Insalata",
      date: new Date(2021,6,1),
      information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      kind: "primo"
    },
    {
      name:"Pasta e patate",
      date: new Date(2021,6,1),
      information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      kind: "secondo"
    },
    {
      name:"Petto di pollo",
      date: new Date(2021,6,3),
      information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      kind: "contorno"
    },
    {
      name:"Pizza",
      date: new Date(2021,6,4),
      information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      kind: "primo"
    },
    {
      name:"Sushino",
      date: new Date(2021,6,7),
      information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      kind: "primo"
    }
  ] 

  const users = {
    0: {
      name: "Antonio",
      surname: "Pezzella",
      gender: "Male",
      birth: "01/05/1991",
      NHS_Number: 51515151,
      address: "Via Vittorio Veneto, 45",
      town: "Grumo Nevano (Napoli)",
      postcode: "80028",
      email: "nikay360@hotmail.it" ,
      mobile_number: "3277088590",
      img: profileImage1,
      pathologies: [
        "Psoriasis",
        "Coeliac" 
      ]
    },
    1: {
      name: "Francesca",
      surname: "Pezzella",
      gender: "Female",
      birth: "12/01/1988",
      NHS_Number: 51515451,
      address: "Via Frezza, 4",
      town: "Miano (Napoli)",
      postcode: "80012",
      email: "nidda0@hotmail.it" ,
      mobile_number: "3245088590",
      img: profileImage1,
      pathologies: [
        "Lupus Erythematosus" ,
        "Diabetes Type 1" 
      ],
      appointments:[
        {
          title:"Visita 1",
          date: new Date(2021,6,11)
        },
        {
          title:"Visita 2",
          date: new Date(2021,6,18)
        },
        {
          title:"Visita 2",
          date: new Date(2021,6,30)
        }
      ]
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

  const logoutHandler = () =>{
    alert("LogOut");
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
    history.push('/');
  }

  return (
    <div className="container">
      <Switch>
        <Route path='/' exact>
          <Login onAuth={onAuthHandler} />
        </Route>
        {(allineamento.isAuth) ? <Pages user={allineamento} workout={videoLession} receipt={receipt} logout={logoutHandler} /> : <Route><h1>Not logged</h1></Route>}
      </Switch>
    </div>
  );
}

export default App;