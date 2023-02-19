// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBTaieFQsEffeBQyoTQGNcmBAnS8qpAoQ",
  authDomain: "twitter-clone-f6f5b.firebaseapp.com",
  projectId: "twitter-clone-f6f5b",
  storageBucket: "twitter-clone-f6f5b.appspot.com",
  messagingSenderId: "774196996323",
  appId: "1:774196996323:web:ee2ca17fda0ab812c93dd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


