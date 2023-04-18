// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI6qXpZ3iCLgQQN4f0r5xGyojrXK1c5FE",
  authDomain: "the-news-dragon-4a309.firebaseapp.com",
  projectId: "the-news-dragon-4a309",
  storageBucket: "the-news-dragon-4a309.appspot.com",
  messagingSenderId: "36519663304",
  appId: "1:36519663304:web:14db6fbce257ccb92577fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;