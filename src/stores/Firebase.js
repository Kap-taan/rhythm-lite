import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXncfyLfvZGke2cPjt7YdKSm_cFhEFASE",
  authDomain: "dopemusichash.firebaseapp.com",
  projectId: "dopemusichash",
  storageBucket: "dopemusichash.appspot.com",
  messagingSenderId: "982411440696",
  appId: "1:982411440696:web:bd5991a81adc12f1776ccd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

