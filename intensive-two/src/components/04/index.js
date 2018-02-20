import React, { Component } from "react";
import CommentList from "./commentList";

const comments = [
  {
    username: "twitch",
    text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
  },
  {
    username: "michaelmarzetta",
    text: "Omg that match was crazy"
  },
  {
    username: "themexican_leprechaun",
    text: "What a setup"
  },
  {
    username: "dennis_futbol",
    text: "It that injustice"
  },
  {
    username: "dennis_futbol",
    text: "Is"
  }
];

class Fourth extends Component {
  render() {
    return (
      <div>
        <CommentList comments={comments}/>
      </div>
    );   
  }
}

export default Fourth;
