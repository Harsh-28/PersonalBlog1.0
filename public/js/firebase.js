// let firebaseConfig = {
//    //enter your firebase Config
// };

// firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();
// let auth = firebase.auth();

// const logoutUser = () =>{
//   auth.signOut();
//   location.reload();
// }


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBW4ee_iSQ-VPrY6qT_AHfUuKgXb-KzTtw",
  authDomain: "blog-c8266.firebaseapp.com",
  projectId: "blog-c8266",
  storageBucket: "blog-c8266.appspot.com",
  messagingSenderId: "420078456230",
  appId: "1:420078456230:web:ac70ed63cc357d0f219367",
  measurementId: "G-HEVQE07976"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let db = firebase.firestore();
let auth = firebase.auth(); 

let logOutUser = () => {
  auth.signOut();
  location.reload();
}