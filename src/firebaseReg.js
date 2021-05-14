import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKDlf4DsSJcZ8C4KOyHLWYQglj1RGaaJg",
    authDomain: "curso-esp-97e7a.firebaseapp.com",
    projectId: "curso-esp-97e7a",
    storageBucket: "curso-esp-97e7a.appspot.com",
    messagingSenderId: "376160238384",
    appId: "1:376160238384:web:efe02fd8414b6482ba66f5"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();

   export {auth}
   export default firebase;