import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD-3rQC1mTfQcKFSh7AnejTN13tvHSkJ3M",
  authDomain: "challenge-c5391.firebaseapp.com",
  projectId: "challenge-c5391",
  storageBucket: "challenge-c5391.appspot.com",
  messagingSenderId: "134390065796",
  appId: "1:134390065796:web:697c9e0517fa2f8ca870d1",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };
