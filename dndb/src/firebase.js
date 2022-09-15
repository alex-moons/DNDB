// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-fSOccCxBv_NeTTf9vT4gKbOypRRAWQ",
  authDomain: "dnd-compenduary.firebaseapp.com",
  databaseURL: "https://dnd-compenduary-default-rtdb.firebaseio.com",
  projectId: "dnd-compenduary",
  storageBucket: "dnd-compenduary.appspot.com",
  messagingSenderId: "878631323897",
  appId: "1:878631323897:web:7f0df1c01178b88430ba28",
  measurementId: "G-K9JKDHZNDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);