import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from '../Authenticaion/Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();


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
        setAuthError('');
        alert("login successfuly")
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }


  const signInWithGoogle = () =>{
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setError('');
        alert("Successfuly sign in")
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false));
  };


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
        setAuthError('');
        alert('Sign out successfuly');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const newsignIn = async () => {
    const { user }  =  await signInWithPopup(firebaseAuth, provider);
 const { refreshToken, providerData } = user;
 // localstorage.setItem("user", JSON.stringify(providerData));
 // localstorage.setItem("accessToken", JSON.stringify(refreshToken));
 };

  // const saveUser = (email, password, displayName, method) => {
  //   const user = { email, password, displayName };
  //   fetch('https://pacific-oasis-02900.herokuapp.com/users', {
  //     method: method,
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then()
  // }

  return {
    user,
    loginUser,
    registerUser,
    logOut,
    signInWithGoogle,
    authError,
    isLoading,
    newsignIn
  }

}

export default useFirebase;