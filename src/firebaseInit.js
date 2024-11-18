// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNXky6jN1aQVmLWYLQzZvZbyk1VYucrQU",
  authDomain: "e-com-app-99ab2.firebaseapp.com",
  projectId: "e-com-app-99ab2",
  storageBucket: "e-com-app-99ab2.appspot.com",
  messagingSenderId: "605605957215",
  appId: "1:605605957215:web:79e140e992ea7fcc3555ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

// Export statements
export const db=getFirestore(app);
export {auth};