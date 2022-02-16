import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import initializeFirbase from "../Components/Login/Firebase/firebase.init";

initializeFirbase()
const useFirebase = () =>{
    const [user, setUser] = useState()

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
 
    const email = error.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

    const logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return{
        user,
        logout,
        signInWithGoogle
    }

}

export default useFirebase;