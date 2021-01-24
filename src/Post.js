import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOption Icon={ThumbUpAltOutlinedIcon} color="gray" title="Like" />
        <InputOption Icon={ChatOutlinedIcon} color="gray" title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} color="gray" title="Share" />
        <InputOption Icon={SendOutlinedIcon} color="gray" title="Send" />
      </div>
    </div>
  );
});

export default Post;
