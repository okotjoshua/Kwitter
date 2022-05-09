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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        

    </div>
  )
}

export default Feed;