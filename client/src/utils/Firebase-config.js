// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// todo: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAspaVMswvFtRz5kKyc0JzAwDe6m3-dXnk",
  authDomain: "petflix-project.firebaseapp.com",
  projectId: "petflix-project",
  storageBucket: "petflix-project.appspot.com",
  messagingSenderId: "1050991303996",
  appId: "1:1050991303996:web:649d1ea10b50ab12481239",
  measurementId: "G-9Q0XDHCSZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app); //this add authentication to project

//*Successfully linked project to Firebase