// const firebaseConfig = {
//   apiKey: "AIzaSyD8AHX2IjX1hcipYNvRILFgbfvHn3QKi7I",
//   authDomain: "foodmart-7cc26.firebaseapp.com",
//   projectId: "foodmart-7cc26",
//   storageBucket: "foodmart-7cc26.appspot.com",
//   messagingSenderId: "1085474771589",
//   appId: "1:1085474771589:web:a8714ad62597f3ef258fec"
// };
// export default firebaseConfig;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export default firebaseConfig;