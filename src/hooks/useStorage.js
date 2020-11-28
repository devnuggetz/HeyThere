import { useEffect, useState } from "react";
import { projectFirestore, projectStorage } from "../firebase/config";

const useStorage = ({ profileImage, name, username, email, bio }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [dummyName, setDummyName] = useState("");

  useEffect(() => {
    const storageRef = projectStorage.ref(profileImage.name);
    const collectionRef = projectFirestore.collection("users");
    storageRef.put(profileImage).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({
          url,
          name: { name },
          username: { username },
          email: { email },
          bio: { bio },
        });
        setUrl(url);
      }
    );
  }, [profileImage]);
  return { progress, url, error };
};
export default useStorage;
