import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAtKM1H6E__pT16_tvDsvSCDu5BGQ27mFE",
    authDomain: "bookdonations-698b2.firebaseapp.com",
    projectId: "bookdonations-698b2",
    storageBucket: "bookdonations-698b2.appspot.com",
    messagingSenderId: "294192773720",
    appId: "1:294192773720:web:9597c9484805cf17faa82d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()