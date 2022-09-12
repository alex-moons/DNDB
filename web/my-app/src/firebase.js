import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAAEGerfxk-lrTCz3HjX2kxZH13NPPnbM",
  authDomain: "tmpdnd-ed52d.firebaseapp.com",
  projectId: "tmpdnd-ed52d",
  storageBucket: "tmpdnd-ed52d.appspot.com",
  messagingSenderId: "348774460592",
  appId: "1:348774460592:web:006d7a6baff5219d641f75",
  measurementId: "G-LT147H9YFD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);