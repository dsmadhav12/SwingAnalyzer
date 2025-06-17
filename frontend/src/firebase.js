import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVWKZiih5AAC6L6s1KnYPC1Z1F-UnYYIQ",
  authDomain: "swinganalyzer-7e36e.firebaseapp.com",
  projectId: "swinganalyzer-7e36e",
  storageBucket: "swinganalyzer-7e36e.appspot.com",
  messagingSenderId: "104553180094",
  appId: "1:104553180094:web:99b8144e76f8883b4b27ef",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
