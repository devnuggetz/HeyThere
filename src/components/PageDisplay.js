import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFirestore from "../hooks/useFirestore";
import Temp3 from "./Temp3";

export default function PageDisplay(props) {
  // const { users } = useFirestore("users");
  const [users, setUser] = useState();
  const [userQuery, setUserQuery] = useState(props.match.params.username);
  const [displayUser, setDisplayUser] = useState();
  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };
  const dataFetch = async () => {
    let temp = await useFirestore("users");
    setUser(temp);
    handleClick();
  };
  const handleClick = () => {
    let temp = users.filter((user) =>
      user.username.username.includes(userQuery)
    );
    setDisplayUser(temp);
  };
  useEffect(() => {
    dataFetch();
  }, []);

  console.log(users);
  return (
    <div>
      <h2>heyThere, Create your virtual Identity Today</h2>
      <div className="right-panel-active container" container id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <Temp3 />
          </form>
        </div>
        <div className="overlay-container">
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
