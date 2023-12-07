import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgnysG-YZP3SjN9vcFSJ59kYiNKoykH-w",
  authDomain: "quickadopt-2cc5f.firebaseapp.com",
  projectId: "quickadopt-2cc5f",
  storageBucket: "quickadopt-2cc5f.appspot.com",
  messagingSenderId: "527047853436",
  appId: "1:527047853436:web:660fdcbc92baab78c7d0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth