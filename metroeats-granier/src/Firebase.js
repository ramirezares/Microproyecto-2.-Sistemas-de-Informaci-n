// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS2B_mUfJjJGugguhccOG4YGjuyHeDtm0",
  authDomain: "metroeats-d069a.firebaseapp.com",
  projectId: "metroeats-d069a",
  storageBucket: "metroeats-d069a.appspot.com",
  messagingSenderId: "1031856696885",
  appId: "1:1031856696885:web:68b4a75e3aed417d874b7c",
  measurementId: "G-JT0RXCW30C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;
