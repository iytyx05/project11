// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ0pQbM--s0kWYT-B9r6jEtLVrlTRUV_I",
  authDomain: "auth-7ed6e.firebaseapp.com",
  projectId: "auth-7ed6e",
  storageBucket: "auth-7ed6e.appspot.com",
  messagingSenderId: "228158132528",
  appId: "1:228158132528:web:2c8a439de4c1255707b8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);