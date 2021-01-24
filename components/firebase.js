import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCruMHzepZZQcfBpqPmsjmMTusDD8u-hk",
    authDomain: "rick-and-morty-9b08d.firebaseapp.com",
    databaseURL: "https://rick-and-morty-9b08d-default-rtdb.firebaseio.com",
    projectId: "rick-and-morty-9b08d",
    storageBucket: "rick-and-morty-9b08d.appspot.com",
    messagingSenderId: "783782916293",
    appId: "1:783782916293:web:1fb4b4c54e9771630300ac"
  };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebaseConfig.firestore()
  export {db};