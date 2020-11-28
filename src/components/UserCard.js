import React, { useState, useEffect } from "react";

function UserCard({ displayUser }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (displayUser) {
      setImageUrl(displayUser[0].url);
    }
  }, []);
  console.log(displayUser);
  return (
    <div>
      <h1 className="userCard__heading">HeyThere identity</h1>
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
          <img for="photo-upload" src={imageUrl} />
        </div>
      </label>
      <h2>Shuvam Kumar</h2>
      <h4>Username</h4>
      <h3>bio</h3>
      <a>email</a>
    </div>
  );
}

export default UserCard;
