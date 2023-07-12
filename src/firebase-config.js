// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyTTHJZoj-uj3lvBm-_46EfW0KWtpeaFI",
  authDomain: "lgmvip-10f8a.firebaseapp.com",
  projectId: "lgmvip-10f8a",
  storageBucket: "lgmvip-10f8a.appspot.com",
  messagingSenderId: "403365009230",
  appId: "1:403365009230:web:da8dad64fa3c1e4aee301f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;