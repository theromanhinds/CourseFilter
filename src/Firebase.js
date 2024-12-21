import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUqqjcAQ0jv6lbJAPih4ykLuBVBrR5A88",
  authDomain: "coursefilter-9bab5.firebaseapp.com",
  projectId: "coursefilter-9bab5",
  storageBucket: "coursefilter-9bab5.appspot.com",
  messagingSenderId: "269705395549",
  appId: "1:269705395549:web:113242a0667c715fd5fcb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);