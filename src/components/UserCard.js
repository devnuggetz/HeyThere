import React, { useState, useEffect } from "react";
import "./UserCard.css";

function UserCard({ displayUser }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (displayUser) {
      setImageUrl(displayUser[0].url);
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
      <h2>Shuvam Kumar</h2>
      <p>Username</p>
      <p>Email</p>
      <div className="userCard__bio">
        <p>bio</p>
      </div>
    </div>
  );
}

export default UserCard;
