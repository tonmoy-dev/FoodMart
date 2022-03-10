import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const InitializeFirebase = () => {
    return initializeApp(firebaseConfig);
}

export default InitializeFirebase;