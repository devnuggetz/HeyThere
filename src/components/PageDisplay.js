import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import Temp3 from "./Temp3";

export default function PageDisplay() {
  const { users } = useFirestore("users");
  const [userQuery, setUserQuery] = useState();
  const [displayUser, setDisplayUser] = useState();
  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };
  const handleClick = () => {
    let temp = users.filter((user) =>
      user.username.username.includes(userQuery)
    );
    setDisplayUser(temp);
  };
  console.log(users);
  console.log(displayUser);
  return (
    <div>
      <h2>heyThere, Create your virtual Identity Today</h2>
      <div className="right-panel-active container" container id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <Temp3 />
          </form>
        </div>
        {/* <div className="form-container sign-in-container">
          <form action="#">
            <h1>Create HeyThere Id</h1>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img for="photo-upload" src={imageUrl} />
              </div>
              <input id="photo-upload" type="file" onChange={handleImage} />
            </label>
            <div className="profilePhoto">
              {error && <div>{error} </div>}
              {allEntry && (
                <ProgressBar
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  setImageUrl={setImageUrl}
                  name={name}
                  username={username}
                  bio={bio}
                  email={email}
                />
              )}
            </div>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={handleName}
            />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsername}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={handleBio}
            />
            <button onClick={handleClick}>Submit</button>
          </form>
        </div> */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>HeyThere</h1>
              <p>
                To create your own HeyThere virtual identity click on create
              </p>
              <button class="ghost" id="signIn">
                Create
              </button>
            </div>
            {/* <div className="overlay-panel overlay-right">
              <h1>Want to find someone?</h1>
              <p>
                Enter username if you have any and find their virtual identity
                now
              </p>
              <button class="ghost" id="signUp" onClick={handleSet}>
                find
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
