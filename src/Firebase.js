import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCCOuVVIkIESFpxDlNSwKyD8Y7rHTY5e3w",
  authDomain: "linkedin-clone-603a0.firebaseapp.com",
  projectId: "linkedin-clone-603a0",
  storageBucket: "linkedin-clone-603a0.appspot.com",
  messagingSenderId: "189102744505",
  appId: "1:189102744505:web:0550aeb2a53b8aeb870c68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;