// Import the necessary functions from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBsXiRPTpu2t5IZpo1a3MS4-kMD-zgA0",
  authDomain: "twitter-clone-61808.firebaseapp.com",
  projectId: "twitter-clone-61808",
  storageBucket: "twitter-clone-61808.appspot.com",
  messagingSenderId: "408036722456",
  appId: "1:408036722456:web:142b9bc59be4763401806d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, and Storage services using the app parameter
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Storage service using the app parameter
export const storage = getStorage(app);
