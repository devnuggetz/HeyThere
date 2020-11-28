import app from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCI8tn8g1E_NH6qSzCaHgfJp9B0ImdQU6g",
  authDomain: "heythere-me.firebaseapp.com",
  databaseURL: "https://heythere-me.firebaseio.com",
  projectId: "heythere-me",
  storageBucket: "heythere-me.appspot.com",
  messagingSenderId: "934880657231",
  appId: "1:934880657231:web:ca3feaaa33274900060f3a",
  measurementId: "G-NNJBS1H41M",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();

export { projectFirestore, projectStorage };
