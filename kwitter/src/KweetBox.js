import { Avatar, Button } from '@mui/material';
import React from 'react'
import "./KweetBox.css";

function KweetBox() {
  return (
    <div className="kweetBox">
        <form>
            <div className="kweetBox__input">
                <Avatar src="https://pbs.twimg.com/media/E5Tp2XWWQAAFi4Q?format=jpg&name=small"></Avatar>
                <input placeholder="What's happening?" type="text"></input>
                
            </div>
            <input 
                placeholder="Optional: Enter image URL" 
                className="kweetBox__imageInput"
                type="text">
            </input>

            <Button className="tweetBox__tweetButton"> Kweet </Button>
        </form>

    </div>
  );
}

export default KweetBox;