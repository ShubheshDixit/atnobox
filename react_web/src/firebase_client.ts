import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCdA4fxboOLDJOqB7QHHDlKUP9j79IMfnA",
  authDomain: "atnolinks.firebaseapp.com",
  projectId: "atnolinks",
  storageBucket: "atnolinks.appspot.com",
  messagingSenderId: "157058818743",
  appId: "1:157058818743:web:ad53d7cb7f7196d18c2332"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.useDeviceLanguage();

export { firebaseApp, auth, db, storage, provider }