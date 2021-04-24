import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';

try {
 firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
 });
} catch (error) {
 if (!/already ecist/u.test(error.message)) {
  console.error('Firebase admin initialization error', error.stack);
 }
}



export const fb = {
 auth: firebase.auth(),
 storage: firebase.storage(),
 firestore: firebase.firestore(),
};