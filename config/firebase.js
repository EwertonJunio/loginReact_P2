import { initializeApp } from "firebase/app";
import  Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCjUPxrWkPJa_0-R6s3yAB3k2KsDghH_Hg",
  authDomain: "js.ewerton.firebaseapp.com",
  projectId: "js.ewerton",
  storageBucket: "js.ewerton.appspot.com",
  messagingSenderId: "575151947795",
  appId: "1:575151947795:web:fa6740b483341b06687fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
