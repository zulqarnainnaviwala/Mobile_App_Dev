import * as firebase from "firebase"

const config = {
    apiKey: "AIzaSyAnmYd4qbfI6Sld8vZd_PSA0cNLzOdk7MM",
    authDomain: "mobile-app-development-fa19.firebaseapp.com",
    databaseURL: "https://mobile-app-development-fa19.firebaseio.com",
    projectId: "mobile-app-development-fa19",
    storageBucket: "mobile-app-development-fa19.appspot.com",
    messagingSenderId: "29382328867",
    appId: "1:29382328867:web:46b0b60d4f49912d96a796",
    measurementId: "G-0SKS3WEFJP"
  };


  const fire = firebase.initializeApp(config);
  export default fire;