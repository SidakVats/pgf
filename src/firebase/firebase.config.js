// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmfNFLQ1EIccX-XBvZdeqI1gJvV0JA_Hc",
  authDomain: "pgf-project.firebaseapp.com",
  projectId: "pgf-project",
  storageBucket: "pgf-project.appspot.com",
  messagingSenderId: "673878301117",
  appId: "1:673878301117:web:9948bc18e561a1c1129ad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;