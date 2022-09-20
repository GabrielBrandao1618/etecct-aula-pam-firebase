// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyXAs-luFUb-lG1B9nlCw7JyoAG8cKxx8",
  authDomain: "etecct-crud.firebaseapp.com",
  databaseURL: "https://etecct-crud-default-rtdb.firebaseio.com",
  projectId: "etecct-crud",
  storageBucket: "etecct-crud.appspot.com",
  messagingSenderId: "724683395263",
  appId: "1:724683395263:web:9d625011413a31bb9ab60a"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase}