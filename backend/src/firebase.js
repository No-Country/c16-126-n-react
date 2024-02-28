// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
require("dotenv").config();

const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlvpr3fdfMUctIkIbxPIbQMnWHNkjI-RU",
  authDomain: "allservicesapi-96ef4.firebaseapp.com",
  projectId: "allservicesapi-96ef4",
  storageBucket: "allservicesapi-96ef4.appspot.com",
  messagingSenderId: "202769942644",
<<<<<<< HEAD
  appId: "1:202769942644:web:d83ff8e0f85d58b7e92921",
=======
  appId: "1:202769942644:web:d83ff8e0f85d58b7e92921"
>>>>>>> c9e5cc77409275f2d2c2b990d10931ae5b5aaeed
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);
module.exports = { fireApp, auth };
