import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Posts/Post";
// import { db } from '../../../firebase';
// import firebase from 'firebase';
import { useSelector } from "react-redux";
// import { selectUser } from '../../../features/userSlice';
import FlipMove from "react-flip-move";
import CreatePosts from "../CreatePosts/CreatePosts";
import News from "../News/News";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice.js";
import { Avatar } from "@material-ui/core";
import Navbar from "../Navbar";
import Header from "../Header/Header";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

function Feed() {
  //   const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Header />
      <div className="">
        <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
          <div className="py-[80px] flex">
            <div className="content">
              <h1 className="text-5xl">Your daily feed</h1>
              <h1 className="text-2xl mt-4 text-slate-700">
                Explore what others are doing and report places not convenient
                for you.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 p-8 gap-8">
        <div className="col-span-1"></div>
        <div className="feed col-span-6">
          <div className="feed_inputContainer">
            <CreatePosts />
          </div>

          <FlipMove>
            {/* {posts.slice(0, 5).map(({ id, data: { name, description, message, photoUrl}}) => ( */}
            <Post
            // key="1"
            // name="Greha"
            // description="Here is my desc"
            // message="This is my message"
            // photoUrl={photoUrl}
            />
            {/* ))} */}
          </FlipMove>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Feed;
