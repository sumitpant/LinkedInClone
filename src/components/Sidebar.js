import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Sidebar.css'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice'

const Sidebar = () => {
   const user=useSelector(selectUser);
    const recentItem=(topic)=>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://th.bing.com/th/id/R2ab50156c7fd2a0fcf1d615863f1dc5b?rik=g5UpjB8TJzznPA&riu=http%3a%2f%2fblog.teamtreehouse.com%2fwp-content%2fuploads%2f2017%2f08%2freact-logo.png&ehk=igKZ1WoU38kt5zKoPcJu2oAIbi6aYZfx4Lp6J1s5tNI%3d&risl=&pid=ImgRaw" alt="img" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >
                    {user.email[0]}
                    </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                  <p> Who Viewed You</p>
                  <p className="stat_number">20</p>
                </div>
                <div className="sidebar__stat">
                <p> Views on Post</p>
                  <p className="stat_number">20</p>

                </div>
               
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('react')}
                    {recentItem('programming')}
                    {recentItem('google')}
                    {recentItem('amazon')}
                </div>

        </div>
    )
}

export default Sidebar
