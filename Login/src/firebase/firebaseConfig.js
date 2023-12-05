// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDK3-Fd_r7c2PCJ9QokfKocGtLktpz0iuc",
  authDomain: "test-project-2b7c0.firebaseapp.com",
  projectId: "test-project-2b7c0",
  storageBucket: "test-project-2b7c0.appspot.com",
  messagingSenderId: "731917176023",
  appId: "1:731917176023:web:82b645322e89ba26f03492"
};

const app = initializeApp(firebaseConfig);


 export   const auth = getAuth()





 