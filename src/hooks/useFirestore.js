import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
      let users = [];
      snap.forEach((user) => {
        users.push({ ...user.data(), id: user.id });
      });
      setUsers(users);
    });
    return () => unsub();
  }, [collection]);

  return { user };
};
