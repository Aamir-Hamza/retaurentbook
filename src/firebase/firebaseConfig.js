
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsc6Onf3pMIsX9oGMOcAZKkCSEHXSCFTU",
  authDomain: "yoga-1cfe6.firebaseapp.com",
  projectId: "yoga-1cfe6",
  storageBucket: "yoga-1cfe6.firebasestorage.app",
  messagingSenderId: "762363933278",
  appId: "1:762363933278:web:6283a9b6ffcc6b40acbacf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
