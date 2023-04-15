// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-ieig94Vqn8RC6T3qvW4vHDf020Bo2o",
  authDomain: "wittychat-1754e.firebaseapp.com",
  projectId: "wittychat-1754e",
  storageBucket: "wittychat-1754e.appspot.com",
  messagingSenderId: "428735407699",
  appId: "1:428735407699:web:340a819d0e4fd12ec088a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
