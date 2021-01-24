import React from "react";
import "./Header.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import HeaderOption from "./HeaderOption";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import SupervisedUserCircleSharpIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import BusinessCenterSharpIcon from "@material-ui/icons/BusinessCenterSharp";
import CommentSharpIcon from "@material-ui/icons/CommentSharp";
import NotificationImportantSharpIcon from "@material-ui/icons/NotificationImportantSharp";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1609759889~hmac=7375f05b60d89272715b150d9058776c"
          alt="linkedin Image"
        />
        <div className="header__search">
          <SearchSharpIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeSharpIcon} title="Home" />
        <HeaderOption Icon={SupervisedUserCircleSharpIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterSharpIcon} title="Jobs" />
        <HeaderOption Icon={CommentSharpIcon} title="Messiging" />
        <HeaderOption
          Icon={NotificationImportantSharpIcon}
          title="Notification"
        />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
