import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,

} from "react-twitter-embed";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets_input">
        <SearchOutlinedIcon className="widgets_searchIcon"/>
        <input placeholder="Search Kwitter" type="text"/>
        </div>

        <div className="widgets_widgetContainer">
        <h2>What's trending?</h2>

        <TwitterTweetEmbed tweetId={""}/>

        <TwitterTweetEmbed tweetId={""}/>

        <TwitterTweetEmbed 
        sourceType="profile"
        screenName="KelmoiRytah"
        options={{ height:400 }}
        />
        
        <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#Kwitter is awesome", via: "okotjoshua"}}
        />

        <TwitterTimelineEmbed />

        </div>
    </div>
  );
}

export default Widgets;