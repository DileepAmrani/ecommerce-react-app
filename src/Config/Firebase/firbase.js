import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyC8mJDRX5v_Clf3IA8TZLu3EqJUu4Zl1lQ",
    authDomain: "store-commerce.firebaseapp.com",
    databaseURL: "https://store-commerce.firebaseio.com",
    projectId: "store-commerce",
    storageBucket: "store-commerce.appspot.com",
    messagingSenderId: "6340648543",
    appId: "1:6340648543:web:4146399e943de1aac205ea"
  };
const provider = new firebase.auth.FacebookAuthProvider()
const firebaseApp = firebase.initializeApp(firebaseConfig);
export{
  provider,
  firebaseApp
};
