// import firebase from "firebase";
import firebase from 'firebase/compat/app';
// import {
    // initializeApp
// } from "firebase/app";
// import "firebase/database"
// import "firebase/compat/database";
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBjG6-wqCT1syHCu8Nrgc9FNGHtuN3LdUQ",
    authDomain: "twitter-clone-a1ee1.firebaseapp.com",
    projectId: "twitter-clone-a1ee1",
    storageBucket: "twitter-clone-a1ee1.appspot.com",
    messagingSenderId: "17113075084",
    appId: "1:17113075084:web:9235ebce401fe7fc8b5aa9"
};

const app = firebase.initializeApp(firebaseConfig);
// firebase?.initializeApp(firebaseConfig)
const db = app.firestore()

export default db