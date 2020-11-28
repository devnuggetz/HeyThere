import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function CreatePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleClick = (e) => {
    console.log(name, username, bio, profileImage, email);
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
    <div>
      <h1>Wasssup</h1>
      <form>
        <input type="file" onChange={handleImage} />
        <div className="profilePhoto">
          {error && <div>{error} </div>}
          {profileImage && <div>{profileImage.name} </div>}
          {profileImage && (
            <ProgressBar
              profileImage={profileImage}
              setProfileImage={setProfileImage}
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
