import axios from "axios";
import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setEmailPassLoginError,
  setIsLoading,
  setRegisterError,
  setUser
} from "../../redux/slices/stateSlice";
import InitializeFirebase from "../firebase.init";

InitializeFirebase();

const useFirebase = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google-sign-in-method
  const googleSign = () => {
    dispatch(setIsLoading(true));
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        localStorage.setItem('userEmail', `${email}`);
        dispatch(setUser(user));
        saveUser(user, "PUT");
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

  // signOut - method
  const logOut = () => {
    dispatch(setIsLoading(true));
    signOut(auth)
      .then(() => {
        dispatch(setUser(""));
        // dispatch(setAdmin(false));
        router.push("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setErrorMsg(errorMessage));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

  // sign-in-with-email-and-password
  const signWithEmailPass = (email, password) => {
    dispatch(setIsLoading(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setEmailPassLoginError(errorMessage));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

  // register-user-with-email-password
  const registerWithEmailPass = (email, password, name) => {
    dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        saveUser(user, "POST");
        dispatch(setRegisterError(""));
        const newUser = { email, displayName: name , role: "user"};
        dispatch(setUser(newUser));
        router.push("/");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setRegisterError(errorMessage));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

      // Observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser({}));
      }
      dispatch(setIsLoading(false));
    });
    return () => unsubscribed;
  }, [dispatch, auth]);

  // save user information
  const saveUser = (user, method) => {
    if (method === "POST") {
      axios.post(`${process.env.MY_APP_DOMAIN}/api/users`, {
        email: user.email,
        name: user.displayName,
        role: "user"
      })
      .then(response => {
      });
    }
    else if (method === "PUT") {
      axios.put(`${process.env.MY_APP_DOMAIN}/api/users`, {
        email: user.email,
        name: user.displayName,
        role: "user"
      })
      .then(response => {
      });
    }
    
  };

  return {
    googleSign,
    logOut,
    signWithEmailPass,
    registerWithEmailPass,
  };
};

export default useFirebase;