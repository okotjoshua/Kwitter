import React from 'react'
import "./Feed.css";
import KweetBox from './KweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
        {/* Header */}
        <div className="feed_header">
            <h2>Home</h2>
        </div>


        {/* KweetBox */}
        <KweetBox />
  
        {/* Post */}
        <Post 
          displayName="Ritah Faith"
          username="rytahfaith"
          verified={true}
          text="Yeah it is working"
          avatar="https://pbs.twimg.com/media/E5Tp2XWWQAAFi4Q?format=jpg&name=small"
          image="https://pbs.twimg.com/media/FSQVseGWQAEQOAb?format=jpg&name=small"           
          />
  
    </div>
  )
}

export default Feed;