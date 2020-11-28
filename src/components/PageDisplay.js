import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import UserCard from "./UserCard";
import Swal from "sweetalert2";

export default function PageDisplay(props) {
  // const { users } = useFirestore("users");
  const [users, setUsers] = useState([]);
  const [userQuery, setUserQuery] = useState(props.match.params.username);
  const [displayUser, setDisplayUser] = useState();
  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };
  // const dataFetch = async () => {
  //   let temp = await useFirestore("users");
  //   setUser(temp);
  //   handleClick();
  // };
  const handleClick = () => {
    setDisplayUser(
      users.filter((user) => user.username.username.includes(userQuery))
    );
  };

  useEffect(() => {
    if (users.length == 0) {
      projectFirestore.collection("users").onSnapshot((snap) => {
        let users = [];
        snap.forEach((user) => {
          users.push({ ...user.data(), id: user.id });
        });
        setUsers(users);
      });
    } else handleClick();
  }, [users]);

  console.log(users);
  console.log(displayUser);
  return (
    <div className="pageDisplay">
      <h2 className="homePage__heading">
        heyThere, Create your virtual Identity Today
      </h2>
      <div className="right-panel-active container" container id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            {displayUser ? (
              <UserCard displayUser={displayUser} />
            ) : (
              <div>If the link is correct your user will appear here</div>
            )}
          </form>
        </div>
        <div className="overlay-container leftOverlayContainer">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>HeyThere</h1>
              <p>
                To create your own HeyThere virtual identity click on create
              </p>
              <button class="ghost" id="signIn">
                <Link to="/">Create</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
