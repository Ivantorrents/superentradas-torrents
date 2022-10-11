import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNuKTRyCanHJi7KSBMQ_iGGtvuE8h5jGw",
  authDomain: "react-superentradas.firebaseapp.com",
  projectId: "react-superentradas",
  storageBucket: "react-superentradas.appspot.com",
  messagingSenderId: "127445701662",
  appId: "1:127445701662:web:6ada177f3182632b260a0f"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

