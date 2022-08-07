// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWcM3uBR2Q5ntsGGAJoVQ9UmU4kaSiGIo",
  authDomain: "mail-inbox-app.firebaseapp.com",
  databaseURL: "https://mail-inbox-app-default-rtdb.firebaseio.com",
  projectId: "mail-inbox-app",
  storageBucket: "mail-inbox-app.appspot.com",
  messagingSenderId: "37716453709",
  appId: "1:37716453709:web:52a33a95faacaf510caf04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getDatabase(app);  
