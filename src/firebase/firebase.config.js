// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOoKmCrb1DGGCuD9nGhs3sUTt0Tp96sZ8",
  authDomain: "riyadh-teach.firebaseapp.com",
  projectId: "riyadh-teach",
  storageBucket: "riyadh-teach.appspot.com",
  messagingSenderId: "121179067431",
  appId: "1:121179067431:web:3cc4a0f52c0174a21a2a02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;