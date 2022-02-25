// import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from "../../pages/login";
import initializeFirebase from "../Authenticaion/Firebase/firebase.init";





initializeFirebase();



const useFirebase = () => {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


// Email Password sign in, sign up
  const registerUser = (email, password, name, photo, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name, photoURL: photo };
        setUser(newUser);
        // save user to the database
        saveUser(email, password, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }





  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user)
        console.log(user.displayName)
        const loginData = user;

        { user && <Login loginData={result.user}></Login> }
        // console.log(user)
      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }






  // observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])


  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  }



  const saveUser = (email, password, displayName, method) => {
    const user = { email, password, displayName };
    fetch('https://pacific-oasis-02900.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return {

    user,
    loginUser,
    registerUser,
    logOut,
    signInWithGoogle,
    authError
  }

}

export default useFirebase;