import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar,}) {
  return (
    <div className="post">
        <div className="post_avatar">
            <Avatar src="https://pbs.twimg.com/media/E5Tp2XWWQAAFi4Q?format=jpg&name=small"></Avatar>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        Ritah Faith {" "}
                        <span>
                            <VerifiedIcon className="post_badge" /> @ritahkelmoi
                        </span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                   {/* <p>The Lango region in Uganda is currently divided into 9 districts of Alebtong, Amolatar, Apac, Dokolo, Kole, Lira, Oyam, Otuke and Kwania District. What is unique and special in your opinion?</p> */}
                    <p>The Lango region in Uganda is very peaceful and calm!</p>
                </div>
            </div>
            <img 
            src="https://pbs.twimg.com/media/FSQVseGWQAEQOAb?format=jpg&name=small" 
            alt=""
             />
             <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon  fontSize="small" />
                <FavoriteBorderIcon  fontSize="small" />
                <PublishIcon fontSize="small" />
             </div>
        </div>
    </div>
  )
}

export default Post;