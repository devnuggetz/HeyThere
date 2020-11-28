import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Swal from "sweetalert2";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

function HomePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/heythere-me.appspot.com/o/profile%20(2).png?alt=media&token=47939f5f-d3e8-4cfa-ac38-75b65d8e007e"
  );
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [allEntry, setAllEntry] = useState(false);
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState();

  useEffect(() => {
    if (
      imageUrl !=
      "https://firebasestorage.googleapis.com/v0/b/heythere-me.appspot.com/o/profile%20(2).png?alt=media&token=47939f5f-d3e8-4cfa-ac38-75b65d8e007e"
    ) {
      Swal.fire({
        title: "Success! You can share the below link",
        text: `heyThere-me.web.app/${username}`,
        icon: "success",
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
    if (name && bio && imageUrl && email && username) {
      setAllEntry(true);
      e.preventDefault();
    } else {
      Swal.fire({
        title: "No No NO",
        text: "Please enter all the input field",
        icon: "warning",
        confirmButtonText: "Okay",
      });
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
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
    if (!search) {
      Swal.fire({
        title: "No No NO",
        text: "Please enter all the input field",
        icon: "warning",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div>
      <h2 className="homePage__heading">
        heyThere, Create your virtual Identity Today
      </h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <UserCard />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Create HeyThere Id</h1>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img for="photo-upload" src={imageUrl} />
              </div>
              <input
                id="photo-upload"
                type="file"
                onChange={handleImage}
                required
              />
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
              required
            />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsername}
              required
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={handleEmail}
              required
            />
            <input
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={handleBio}
              required
            />
            <button onClick={handleClick}>Submit</button>
          </form>
        </div>
        <div className="overlay-container rightOverlayContainer">
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
              <input
                type="text"
                placeholder="Enter Username"
                value={search}
                onChange={handleSearch}
              />
              <button class="ghost" id="signUp" onClick={handleSet}>
                <Link to={`/${search}`}>find</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
