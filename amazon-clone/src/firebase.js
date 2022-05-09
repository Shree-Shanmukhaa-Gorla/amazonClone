// import firebase from 'firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdQ_KucmZuFxkYyKduDoWO3Je17ni_3W4",
    authDomain: "clone-f4ddf.firebaseapp.com",
    projectId: "clone-f4ddf",
    storageBucket: "clone-f4ddf.appspot.com",
    messagingSenderId: "560574064794",
    appId: "1:560574064794:web:9ce9e0b49e4f32f5cdd723",
    measurementId: "G-WCPSXLCQMN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};