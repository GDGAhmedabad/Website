import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDqoRRpIYj9NG4Ek27UdCyfCnN3_VT2yjw",
  authDomain: "gdgahmedabad-com.firebaseapp.com",
  databaseURL: "https://gdgahmedabad-com.firebaseio.com",
  projectId: "gdgahmedabad-com",
  storageBucket: "gdgahmedabad-com.appspot.com",
  messagingSenderId: "389306967382",
  appId: "1:389306967382:web:7788844dcbe304843ea2f7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};