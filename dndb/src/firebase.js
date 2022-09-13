/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const firestore = getFirestore(app); */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
import {getDatabase, ref, set, child, update, remove} from "https://dnd-compenduary-default-rtdb.firebaseio.com"
export const firestore = getFirestore(app);