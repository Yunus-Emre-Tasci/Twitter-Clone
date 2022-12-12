import firebase from "./firebase";
import {
    initializeApp
} from "firebase/app";
import "firebase/database"



const firebaseConfig = {
    apiKey: "AIzaSyBjG6-wqCT1syHCu8Nrgc9FNGHtuN3LdUQ",
    authDomain: "twitter-clone-a1ee1.firebaseapp.com",
    projectId: "twitter-clone-a1ee1",
    storageBucket: "twitter-clone-a1ee1.appspot.com",
    messagingSenderId: "17113075084",
    appId: "1:17113075084:web:9235ebce401fe7fc8b5aa9"
};

const app = initializeApp(firebaseConfig);

const db=firebase.firestore()

export default db