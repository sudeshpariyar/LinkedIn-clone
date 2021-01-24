import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import InputOption from "./InputOption";
import ImageSharpIcon from "@material-ui/icons/ImageSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import EventNoteSharpIcon from "@material-ui/icons/EventNoteSharp";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateSharpIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageSharpIcon} title="Posts" color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsSharpIcon}
            title="video"
            color="orange"
          />
          <InputOption Icon={EventNoteSharpIcon} title="event" color="green" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="write article"
            color="red"
          />
        </div>
      </div>
      {/* Post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
