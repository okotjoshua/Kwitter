import React from "react";
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
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input placeholder="Search Kwitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's trending?</h2>

        <TwitterTweetEmbed tweetId={"1504714217470914561"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="OKOTJOSHUA43"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#Kwitter is awesome", via: "OKOTJOSHUA43" }}
        />
      </div>
    </div>
  );
}

export default Widgets;