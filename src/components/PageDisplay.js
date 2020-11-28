import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";

export default function PageDisplay() {
  const { users } = useFirestore("users");
  const [userQuery, setUserQuery] = useState();
  const [displayUser, setDisplayUser] = useState();
  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };
  const handleClick = () => {
    let temp = users.filter((user) =>
      user.username.username.includes(userQuery)
    );
    setDisplayUser(temp);
  };
  console.log(users);
  console.log(displayUser);
  return (
    <div>
      <h1>Hello Frans</h1>
      <input type="text" placeholder="Enter Username" onChange={handleChange} />
      <button onClick={handleClick}>Find</button>
      {displayUser && <div>{displayUser[0].name.name}</div>}
    </div>
  );
}
