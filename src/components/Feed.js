import React,{ useState,useEffect} from 'react'
import '../styles/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from'@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import {db} from '../utilities/firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move';
const Feed = () => {
    const user=useSelector(selectUser)
    const[posts,setPosts]=useState([])
    const[input, setInput]=useState("")
    useEffect(() => {
      db.collection('posts').orderBy('timeStamp','desc').onSnapshot(snapshot=>{
          setPosts(snapshot.docs.map(doc=>{
              return {
                  id:doc.id,
                  data:doc.data(),
              }
          }))
      })
    }, [])
    const sendPost=e=>{
        e.preventDefault();
      
       db.collection("posts").add({
           name:user.displayName, 
           description:user.email,
           message:input,
           photoUrl:user.photoUrl||""
           , 
           timeStamp:firebase.firestore.FieldValue.serverTimestamp()

           
       })
       setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Photo" color="#70B5F9"/>
                </div>
            </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>{
                return <Post
                   key={id}
                   name={name}
                   description={description}
                   message={message}
                   photoUrl={photoUrl}
                />
            })}
            </FlipMove>
        </div>
    )
}

export default Feed
