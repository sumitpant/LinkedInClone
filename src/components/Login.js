import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import '../styles/Login.css'
import { auth } from '../utilities/firebase'

const Login = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [profilePic,setProfilePic]=useState();
    const dispatch = useDispatch();
    const register =(e)=>{
        e.preventDefault();
        if(!name){
            return alert('Please Enter Full Name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profilePic,


            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic

                }))
            })
        }).catch(error=>alert(error.message))
        
    }
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,


            }))
        }).catch(error=>alert(error))
       

    }
    return (
        <div className="login">
            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png" alt="logo"/>

            <form>
                <input  placeholder="Full name (required if registering)"type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <input  placeholder="Profile pic URL(optional)"type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)} />
                <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" onClick={loginToApp}>SignIn</button>
            </form>
            <p>Not a Member?
                <span className="login__register" onClick={register}>Register</span>
            </p>

        </div>
    )
}

export default Login
