import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDqOIvzs__aCBitxv35cmUsubQLVCQ7qdA",
  authDomain: "dsc-bias.firebaseapp.com",
  databaseURL: "https://dsc-bias.firebaseio.com",
  projectId: "dsc-bias",
  storageBucket: "dsc-bias.appspot.com",
  messagingSenderId: "969136298141",
  appId: "1:969136298141:web:c288eb75f43e9414891c74",
  measurementId: "G-VCLLVKFZ2C"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  authw:firebase.auth,
  storage:firebase.storage(),
  functions: firebase.functions()
};
