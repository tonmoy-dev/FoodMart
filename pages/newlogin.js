import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Image from 'next/image';
import { config } from '../src/Authenticaion/config';

firebase.initializeApp(config);


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
};


function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div className='bg-green-500 text-center w-1/2 py-4 my-10 mx-auto'>
        <h1 className='text-white text-2xl'>Please sign-in</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div className='bg-green-500 text-center w-1/2 py-4 my-10 mx-auto'>
        <Image width={100} height={100} src={firebase.auth().currentUser.photoURL} alt=''></Image>
      <p className='text-white'>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <button className='bg-white text-green-500 px-4 py-2 mt-4' onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default SignInScreen;