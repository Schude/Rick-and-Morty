import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAEY1GAffn-zjVW-oRUmVpeDbwP3aGh0kQ",
    authDomain: "rick-and-morty-a7d01.firebaseapp.com",
    projectId: "rick-and-morty-a7d01",
    storageBucket: "rick-and-morty-a7d01.appspot.com",
    messagingSenderId: "1024362752885",
    appId: "1:1024362752885:web:a8965480802d6c0c8a413c"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  const database = firebase.firestore();

export { database };
