
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAnUWglx2IXRerLyt07-HFyVUim3JiN0Go",
  authDomain: "house-marketplace-app-630be.firebaseapp.com",
  projectId: "house-marketplace-app-630be",
  storageBucket: "house-marketplace-app-630be.appspot.com",
  messagingSenderId: "691107485031",
  appId: "1:691107485031:web:501991236dea187a338bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()