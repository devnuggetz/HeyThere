import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./CreatePage.css";

export default function CreatePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [allEntry, setAllEntry] = useState(false);

  const handleClick = (e) => {
    setAllEntry(true);
    e.preventDefault();
  };

  const handleImage = (e) => {
    if (e.target.files)
      if (types.includes(e.target.files[0].type)) {
        setProfileImage(e.target.files[0]);
        setError("");
      } else {
        setProfileImage(null);
        setError("Please select a valid image (png/jpeg");
      }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="createPage">
      <form className="createPage__form">
        <label htmlFor="photo-upload" className="custom-file-upload fas">
          <div className="img-wrap img-upload">
            <img
              for="photo-upload"
              src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
            />
          </div>
          <input id="photo-upload" type="file" onChange={handleImage} />
        </label>
        <div className="profilePhoto">
          {error && <div>{error} </div>}
          {allEntry && (
            <ProgressBar
              profileImage={profileImage}
              setProfileImage={setProfileImage}
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
        <input type="text" placeholder="Bio" value={bio} onChange={handleBio} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
