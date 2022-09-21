import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCbObOriZ1qfs2nmYg5ZaUJUs0rPCEUqhE",
    authDomain: "superentradas-react.firebaseapp.com",
    projectId: "superentradas-react",
    storageBucket: "superentradas-react.appspot.com",
    messagingSenderId: "205466160385",
    appId: "1:205466160385:web:3a1e990d630413ed249f00",
    measurementId: "G-B2G8PT1KYP"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);