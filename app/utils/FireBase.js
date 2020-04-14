import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDly4bhso-qDdSi8Cz1jYJvV64ChtkNwsY",
    authDomain: "applic-bf9a3.firebaseapp.com",
    databaseURL: "https://applic-bf9a3.firebaseio.com",
    projectId: "applic-bf9a3",
    storageBucket: "applic-bf9a3.appspot.com",
    messagingSenderId: "455945203946",
    appId: "1:455945203946:web:a77b1f359105ec7257a793",
    measurementId: "G-HTFKPR62HC"
  };


  export const firebaseApp = firebase.initializeApp(firebaseConfig); 
