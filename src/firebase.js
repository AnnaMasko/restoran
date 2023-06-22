// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDJqrhWi0zOQdOUKTB51Lzy1Mz7cWB8jY",
  authDomain: "restoran-4d238.firebaseapp.com",
  projectId: "restoran-4d238",
  storageBucket: "restoran-4d238.appspot.com",
  messagingSenderId: "877295180878",
  appId: "1:877295180878:web:1fed0f5368fd8fef0f371f",
  measurementId: "G-LQXTQ9LGT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth (app)
export default app;