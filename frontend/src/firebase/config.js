import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDaMUpzqqYvozhtm9E9Ax2ktRxmLsMU8IA",
  authDomain: "goal-setter-e80af.firebaseapp.com",
  projectId: "goal-setter-e80af",
  storageBucket: "goal-setter-e80af.appspot.com",
  messagingSenderId: "892300070864",
  appId: "1:892300070864:web:3ddb1e08782f97686133d5",
  measurementId: "G-TB2S1MSQ1N"
};

export default firebase.initializeApp(firebaseConfig);