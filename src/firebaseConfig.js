// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY6eEMD7tZ1N2wh-PwuIf48nJ49Yj8Dk8",
  authDomain: "twitter-clone-7047d.firebaseapp.com",
  projectId: "twitter-clone-7047d",
  storageBucket: "twitter-clone-7047d.appspot.com",
  messagingSenderId: "1099151491089",
  appId: "1:1099151491089:web:6996b04c69f065ecf6b1b0",
  measurementId: "G-7WRZZZ4YLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);