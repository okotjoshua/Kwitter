import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD83fKwHf09m3f_lt2j3XYkze2XTPUyWHo",
    authDomain: "kwitter-a566e.firebaseapp.com",
    projectId: "kwitter-a566e",
    storageBucket: "kwitter-a566e.appspot.com",
    messagingSenderId: "977642988004",
    appId: "1:977642988004:web:f4f37a9773563a9c62a7f1",
    measurementId: "G-PM0DFK00C1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;