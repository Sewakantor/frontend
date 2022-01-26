// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUrLUFo8A6d89UMou4yK5u4lnfOX8nKBw",
  authDomain: "sewakantor-fd250.firebaseapp.com",
  projectId: "sewakantor-fd250",
  storageBucket: "sewakantor-fd250.appspot.com",
  messagingSenderId: "345722063117",
  appId: "1:345722063117:web:69a9f12cc3cfa4c203c844",
  measurementId: "G-0N8Q928VGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);