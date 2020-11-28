import React, { useState, useEffect } from "react";
import "./UserCard.css";

function UserCard({ displayUser }) {
  const [imageUrl, setImageUrl] = useState();
  const [name, setnName] = useState();
  const [bio, setBio] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  useEffect(() => {
    if (displayUser) {
      setImageUrl(displayUser[0].url);
      setBio(displayUser[0].bio.bio);
      setnName(displayUser[0].name.name);
      setEmail(displayUser[0].email.email);
      setUsername(displayUser[0].username.username);
    }
  }, []);
  console.log(displayUser);
  return (
    <div className="userCard">
      <h1 className="userCard__heading">HeyThere identity</h1>
      <label className="custom-file-upload fas imageDisplay">
        <div className="img-wrap img-upload">
          <img for="photo-upload" src={imageUrl} />
        </div>
      </label>
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <div className="userCard__bio">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default UserCard;
