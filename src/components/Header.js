import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import  BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import {useDispatch} from 'react-redux'
import { auth } from '../utilities/firebase';
import { selectUser } from '../features/userSlice';
const Header = () => {
   
    const dispatch = useDispatch();
    const logout=()=>{
        dispatch(logout());
        auth.signOut();

    }
    return (
        <div className="header">
            <h1></h1>
            <div className="header__left">
                 <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1619888704~hmac=f0b7577e2adc86b15b417b8b14c03aff" 
                 alt="icon"/>

                 <div className="header__search">
                     <SearchIcon/>
                     <input type="text"/>

                 </div>
            </div>
            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon } title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon={MessageIcon} title="Messages"/>
                <HeaderOption
                avatar={true}
                 title="me"
                 onClick={logout}
                />
 
            </div>
        </div>
    )
}

export default Header
