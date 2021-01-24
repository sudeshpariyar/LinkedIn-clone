// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBDFTeKRQ1kLGcFw4HZh2pjYdqS2hatyPo",
  authDomain: "linkedin-clone-ac6dd.firebaseapp.com",
  projectId: "linkedin-clone-ac6dd",
  storageBucket: "linkedin-clone-ac6dd.appspot.com",
  messagingSenderId: "382295799721",
  appId: "1:382295799721:web:7188de8c1a29595ac6b6b8",
  measurementId: "G-0G1FLJD826",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
