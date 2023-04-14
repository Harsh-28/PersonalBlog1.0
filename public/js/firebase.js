let firebaseConfig = {
   apiKey: "AIzaSyBW4ee_iSQ-VPrY6qT_AHfUuKgXb-KzTtw",
    authDomain: "blog-c8266.firebaseapp.com",
    projectId: "blog-c8266",
    storageBucket: "blog-c8266.appspot.com",
    messagingSenderId: "420078456230",
    appId: "1:420078456230:web:ac70ed63cc357d0f219367",
    measurementId: "G-HEVQE07976"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () =>{
  auth.signOut();
  location.reload();
}