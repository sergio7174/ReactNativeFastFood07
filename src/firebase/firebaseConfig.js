import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD3ICjjrEtDQkc7RT6ZHcSSgHZWyrUvPdw",
  authDomain: "myfirebaseapp-ac660.firebaseapp.com",
  databaseURL: "https://myfirebaseapp-ac660-default-rtdb.firebaseio.com",
  projectId: "myfirebaseapp-ac660",
  storageBucket: "myfirebaseapp-ac660.firebasestorage.app",
  messagingSenderId: "790642062419",
  appId: "1:790642062419:web:58a1816f47dd579c35c2a6",
  measurementId: "G-P241K21LSD"
}


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 
export { auth };

export const db = getFirestore(app);