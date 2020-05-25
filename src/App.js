import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from './app/shared/Routes';
import Navbar from './app/components/navBar/navBar';
import './App.css';
import History from './history';
import fire from './firebase';

function App() {
  const [userProps, setUser] = useState({
    userName: 'Demo User',
    isUserLoggedIn: false
  });

  useEffect(() => {
    (() => {
      if (userProps.isUserLoggedIn) {
        History.push('/starwars');
      }
    })();
    return () => {
      fire.auth().signOut();
    }
  }, [userProps]);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        setUser({ ...userProps, isUserLoggedIn:true });
      }
    })
}, []);

console.log('isUserLooged in in app.js', userProps.isUserLoggedIn)
  return (
    <div>
      <Router history={History}>
        <div className='App'>
          {
            (<>
              <Navbar isUserLoggedIn={userProps.isUserLoggedIn}/>
              <Routes isAuthorised={userProps.isUserLoggedIn} />
            </>)
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
