import React from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";

export default function ProgressBar({ profileImage, setProfileImage }) {
  const { url, progress } = useStorage(profileImage);
  console.log(progress, url);
  return <div className="progressBar" style={{ width: progress + "%" }}></div>;
}
