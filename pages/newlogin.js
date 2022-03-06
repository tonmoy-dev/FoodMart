import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
      <div className='w-full max-w-sm px-4 py-6 mx-auto my-10 bg-gray-200 rounded-md shadow-md'>
        <h1 className='text-green-500 font-semibold text-3xl text-center mb-6'>Login Here</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div className='w-full max-w-sm px-10 py-6 mx-auto my-10 bg-gray-200 rounded-md shadow-md'>
        <Image className="rounded-full" width={80} height={80} src={firebase.auth().currentUser.photoURL} alt=''></Image>
      <p className='text-black font-semibold my-4'>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <button className='bg-white font-semibold rounded-md text-green-500 px-4 py-2 mt-4' onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default SignInScreen;