import React, { useState } from 'react';
import "./Header.css";
import logo from './image2vector.svg';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import MovieRoundedIcon from '@material-ui/icons/MovieRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import QueueRoundedIcon from '@material-ui/icons/QueueRounded';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Header() {
    const [click] = useState(false);
    

    return <div className="header">
    <Link to="/home" >
        <div className="header__left">
             <img 
                 src={logo} alt=""
            />
        </div>
    </Link>


        <div className="header__middle">
            <NavLink to="/home" activeClassName="active">
                <div className={click ? 'header__option--active':'header__option'}> 
                    <HomeRoundedIcon fontSize="large" />
                </div>
            </NavLink>
            < NavLink to="/forum" activeClassName="active">
            <div className={click ? 'header__option--active':'header__option'}> 
                <ForumRoundedIcon fontSize="large" />
            </div>
            </NavLink>
            <NavLink to ="/movies" activeClassName="active">
            <div className={click ? 'header__option--active':'header__option'}>
                <MovieRoundedIcon fontSize="large" />
            </div>
            </NavLink>
            <NavLink to="/groups" activeClassName="active">
            <div className={click ? 'header__option--active':'header__option'}> 
                <SupervisedUserCircleRoundedIcon fontSize="large" />
            </div>
            </NavLink>
        </div>

        <div className="header__right">
            <div className="header__input">
                <SearchIcon fontSize="medium"/> 
                
                <input placeholder="Search titles, actors, genres..."
                type="text" />
            </div>
            <div classname="header__info">
                <Link to="/profile"> 
                <IconButton>
                <Avatar />   
                </IconButton>
                </Link>
            </div>
            <IconButton>
                <QueueRoundedIcon />   
            </IconButton>
            <IconButton>
                <NotificationsActiveRoundedIcon />   
            </IconButton>
        </div>

    </div>; 
}

export default Header
