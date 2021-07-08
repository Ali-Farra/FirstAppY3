import firebase from "firebase/app";
require("firebase/firestore")
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDnIrSEt8Oc359qZ4oK-FuG6og3EQ9wk1Q",
    authDomain: "todolist-ee394.firebaseapp.com",
    projectId: "todolist-ee394",
    storageBucket: "todolist-ee394.appspot.com",
    messagingSenderId: "422275239876",
    appId: "1:422275239876:web:5753a301824df4b0621e91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore()
  export {firebase, db as default}