import React, { useState } from "react";

export default function CreatePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();

  const handleClick = (e) => {
    console.log(name, username, bio, profileImage, email);
    e.preventDefault();
  };

  const handleImage = (e) => {
    if (e.target.files) setProfileImage(e.target.files[0]);
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
