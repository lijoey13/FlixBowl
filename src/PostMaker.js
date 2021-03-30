import { Avatar } from '@material-ui/core';
import React from 'react';
import "./PostMaker.css";

function PostMaker() {

    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <div className="postMaker">
           <div className="postMaker__top">
               <Avatar/>
               <form>ßß
                   <input 
                   className="postMaker__input" 
                   placeholder="Create Post" />

                   <input type="text" 
                   placeholder="Topic"/>

                   <button onClick={handleSubmit} type="submit">
                       Post
                   </button>

               </form>

           </div>

           <div className="postMaker__bottom">

           </div>

        </div>
    )
}

export default PostMaker
