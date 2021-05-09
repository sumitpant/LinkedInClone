import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser,logout ,login} from './features/userSlice';
import { auth } from './utilities/firebase';
import { useDispatch } from 'react-redux';
import Widgets from './components/Widgets';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged(userAuth=>{
     if(userAuth){
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.UID,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoUrl
          }))
     }
     else{
     dispatch(logout())
     }
   })
  }, [])
const user = useSelector(selectUser)
  return (
    <div className="app">
      < Header/>
      {!user? (<Login/>):(
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
  
      )}   
    </div>
  );
}

export default App;
