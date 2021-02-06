 import  firebase from 'firebase/app'
 import "firebase/auth"
 
 
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDs5WaqERXE7cNHH3MDAPCcDT83sL2WAWs",
    authDomain: "ecommerce-ded37.firebaseapp.com",
    projectId: "ecommerce-ded37",
    storageBucket: "ecommerce-ded37.appspot.com",
    messagingSenderId: "385733654747",
    appId: "1:385733654747:web:b07efc18a6c4541da6f4fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export functionality from firebase

  export const auth = firebase.auth();
  export const googleAuthProvider= new firebase.auth.GoogleAuthProvider(); //we create new instance of firebase.auth.googleprovider

