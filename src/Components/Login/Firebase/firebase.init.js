import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

 const initializeFirbase = () =>{
    initializeApp(firebaseConfig);
 }
 export default initializeFirbase;