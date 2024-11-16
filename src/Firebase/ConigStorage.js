import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  // apiKey: "AIzaSyBaqT3RnjJ2St3T0KRENZOy6_OeyWdd4cQ",
  // authDomain: "peeppips-web.firebaseapp.com",
  // projectId: "peeppips-web",
  // storageBucket: "peeppips-web.appspot.com",
  // messagingSenderId: "682271042427",
  // appId: "1:682271042427:web:4ea6c0c829c2f283146bde",
  // measurementId: "G-SMF7WDGRJL"
  apiKey: "AIzaSyDJXDJ2jgcbgG5yepc3cUOLzZTImuivYGM",
  authDomain: "brokerfree-aa5b6.firebaseapp.com",
  projectId: "maklerfrei-aa5b6",
  storageBucket: "brokerfrei-aa5b6.firebasestorage.app",
  messagingSenderId: "722452738467",
  appId: "1:722452738467:web:2c8568f62df5d806e52a16",
  measurementId: "G-WW5WTBP5RD"
});

const storage = getStorage(app);
export default storage;