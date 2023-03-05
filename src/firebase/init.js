// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTps3YDdHvmM6qbHGRItBlESHd1iEdT4c",
  authDomain: "fir-practice-c6bcb.firebaseapp.com",
  projectId: "fir-practice-c6bcb",
  storageBucket: "fir-practice-c6bcb.appspot.com",
  messagingSenderId: "836957828805",
  appId: "1:836957828805:web:539c15a97bf1d33e69e2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth;