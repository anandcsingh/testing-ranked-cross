// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtuS9orJ_XKD8Z0OM0kqTwlITVkm3ct_4",
  authDomain: "keito-7e506.firebaseapp.com",
  projectId: "keito-7e506",
  storageBucket: "keito-7e506.appspot.com",
  messagingSenderId: "632520103184",
  appId: "1:632520103184:web:3b67a3ca5c5ba30b0d4195"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);