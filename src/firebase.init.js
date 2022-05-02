// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHpxGCMQnIOagK_1Xp098zkug2IpPXIU",
  authDomain: "car-werehouse.firebaseapp.com",
  projectId: "car-werehouse",
  storageBucket: "car-werehouse.appspot.com",
  messagingSenderId: "1050664260896",
  appId: "1:1050664260896:web:2e8779e4cac2a7605c3345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;