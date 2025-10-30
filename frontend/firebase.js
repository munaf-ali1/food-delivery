// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-webapp-1a2eb.firebaseapp.com",
  projectId: "food-delivery-webapp-1a2eb",
  storageBucket: "food-delivery-webapp-1a2eb.firebasestorage.app",
  messagingSenderId: "550157250799",
  appId: "1:550157250799:web:de4dcee34d1fdbdebe2b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}
