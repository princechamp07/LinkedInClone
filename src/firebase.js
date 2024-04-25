// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdtFGkqPu1sw-IJxEmH5UE3P1PwaBjG1M",
  authDomain: "linkedin-clone-4621b.firebaseapp.com",
  projectId: "linkedin-clone-4621b",
  storageBucket: "linkedin-clone-4621b.appspot.com",
  messagingSenderId: "1026142361743",
  appId: "1:1026142361743:web:4d2c0a8d92fdd326c678fa",
  measurementId: "G-FJVFFWYFW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app, "gs://my-custom-bucket"); 


export {storage,db,auth,provider}

export default app;