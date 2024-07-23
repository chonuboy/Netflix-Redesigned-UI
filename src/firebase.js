import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIYOB5clqu6f-3AYPP-GDcoc8rm59VN80",
    authDomain: "netflix-clone-72fe3.firebaseapp.com",
    projectId: "netflix-clone-72fe3",
    storageBucket: "netflix-clone-72fe3.appspot.com",
    messagingSenderId: "850227169279",
    appId: "1:850227169279:web:a93a27127be6f683ae89ca",
    measurementId: "G-3P8NSXB0TE"
  };
const app=initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore();

export {app,auth,db};
