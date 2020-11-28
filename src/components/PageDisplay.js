import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function PageDisplay() {
  const { users } = useFirestore("users");
  console.log(users);
  return <div></div>;
}
