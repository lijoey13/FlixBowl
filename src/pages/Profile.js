import { Avatar } from '@material-ui/core';
import React from 'react';
import { Watchlist } from '../components/Watchlist';
import { Watched } from '../components/Watched';
import "./Profile.css";


export default function Profile() {
    return (
        <div className="profile__page">
            <div className="profile__info"> 
                <h1> Profile</h1>
                <Avatar/>
            </div>
                <div className="profile__components">
                    <Watchlist/>
                    <Watched/>
                </div>
        </div>

        
    )
}
