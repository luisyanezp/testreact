import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCHiqVkSoV6bFPfrvlORDFE3pIh5jdmjZI",
  authDomain: "findmypuesto.firebaseapp.com",
  databaseURL: "https://findmypuesto.firebaseio.com",
  storageBucket: "findmypuesto.appspot.com",
  messagingSenderId: "556243347661"
};
var fire = firebase.initializeApp(config);
export default fire;
