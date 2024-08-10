// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqyzb5dpICHEW1hqbqGLfi0n2yAoD4isM",
  authDomain: "cinemagpt-2df0d.firebaseapp.com",
  projectId: "cinemagpt-2df0d",
  storageBucket: "cinemagpt-2df0d.appspot.com",
  messagingSenderId: "854193998131",
  appId: "1:854193998131:web:0f2c4e8296efa9a2929646",
  measurementId: "G-0BSFHTY00K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();