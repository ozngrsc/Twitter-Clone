import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1077133754345422848/v9k0AolD_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ozan Gürsucu{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @OznGrsc_
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challange you to build a Twitter Clone with React!</p>
          </div>
        </div>
        <img
          src="https://media4.giphy.com/media/7lcOslshmV8F9QpvEg/200.webp"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
