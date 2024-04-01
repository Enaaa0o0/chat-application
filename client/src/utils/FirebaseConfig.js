
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBOGOtyoYpKCVmK1Yg3fYvhOxe23kMlWiE",
  
    authDomain: "chat-application-60c30.firebaseapp.com",
  
    projectId: "chat-application-60c30",
  
    storageBucket: "chat-application-60c30.appspot.com",
  
    messagingSenderId: "505073128033",
  
    appId: "1:505073128033:web:44975122103d31ddc15020",
  
    measurementId: "G-7PFT5KNZ9P"

  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
  