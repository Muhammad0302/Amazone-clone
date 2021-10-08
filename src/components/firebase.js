// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjEJdNMM6KkKOHSd11NXsBdrGNOq9OlEQ",
  authDomain: "clone-233d3.firebaseapp.com",
  projectId: "clone-233d3",
  storageBucket: "clone-233d3.appspot.com",
  messagingSenderId: "4743575643",
  appId: "1:4743575643:web:fb588a3534c633b98fa77e",
  measurementId: "G-9BDR6TLPZ5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
