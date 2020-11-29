import React, { useState } from "react";

function Temp3() {
  const [imageUrl, setImageUrl] = useState(
    "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
  );
  return (
    <div>
      <h1>HeyThere virtual identity</h1>
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

export default Temp3;
