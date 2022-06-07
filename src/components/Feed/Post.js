import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1077133754345422848/v9k0AolD_400x400.jpg" />
      </div>
    </div>
  );
}

export default Post;
