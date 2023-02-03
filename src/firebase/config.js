// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCDpCtW4SvYm4kcVUMiAGQNqCaeqhJcl3E",
authDomain: "gamerworld-dbbdf.firebaseapp.com",
projectId: "gamerworld-dbbdf",
storageBucket: "gamerworld-dbbdf.appspot.com",
messagingSenderId: "823269264365",
appId: "1:823269264365:web:be70010abdbb14fc3c35e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);