import firebase from "firebase/compat/app";
//used for authentication
import { getAuth } from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsWH4N45vj2l68CmF6KCJTxw-IwemXxNo",
  authDomain: "clone-92e0f.firebaseapp.com",
  projectId: "clone-92e0f",
  storageBucket: "clone-92e0f.appspot.com",
  messagingSenderId: "778612857282",
  appId: "1:778612857282:web:681d8489b7ba97e6dd5e5b",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore()
