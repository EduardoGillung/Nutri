// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsn8lIbbj-n6oOok0tEND_L8fHQtfI6Fg",
  authDomain: "myapp-14570.firebaseapp.com",
  projectId: "myapp-14570",
  storageBucket: "myapp-14570.appspot.com",
  messagingSenderId: "1010104961905",
  appId: "1:1010104961905:web:2131a85472e1c7a04ac4d0",
  measurementId: "G-KWY37YFNL1",
  databaseURL: "https://myapp-14570-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app