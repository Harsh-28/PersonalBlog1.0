let firebaseConfig = {
   //enter your firebase Config
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () =>{
  auth.signOut();
  location.reload();
}
