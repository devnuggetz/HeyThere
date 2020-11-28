import React, { useState, useEffect } from "react";
import Temp3 from "./Temp3";
import Swal from "sweetalert2";
import ProgressBar from "./ProgressBar";

function HomePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState(
    "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
  );
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [allEntry, setAllEntry] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (
      imageUrl !=
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
    ) {
      Swal.fire({
        title: "Success! You can share the below link",
        text: "abs",
        icon: "warning",
        confirmButtonText: "yay",
      }).then((result) => {
        if (result.value) {
          setImageUrl(
            "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
          );
          setName("");
          setEmail("");
          setBio("");
          setUsername("");
        }
      });
    }
  }, [imageUrl]);
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
  const handleSet = () => {
    setCheck(!check);
  };
  var classes = !check ? "container" : "right-panel-active container";

  return (
    <div>
      <h2>heyThere, Create your virtual Identity Today</h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <Temp3 />
          </form>
        </div>
        <div className="form-container sign-in-container">
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
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>HeyThere</h1>
              <p>
                To create your own HeyThere virtual identity click on create
              </p>
              <button class="ghost" id="signIn" onClick={handleSet}>
                Create
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Want to find someone?</h1>
              <p>
                Enter username if you have any and find their virtual identity
                now
              </p>
              <button class="ghost" id="signUp" onClick={handleSet}>
                find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
