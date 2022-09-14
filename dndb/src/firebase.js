// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSp65viM3lJ4mCwuBbJQiPCx7bsvthU8M",
  authDomain: "testingreact-52094.firebaseapp.com",
  projectId: "testingreact-52094",
  storageBucket: "testingreact-52094.appspot.com",
  messagingSenderId: "650575538676",
  appId: "1:650575538676:web:7e83e2f59fcfc2eab031a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);