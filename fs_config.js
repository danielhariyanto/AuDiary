import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZEISA_afenMqloWF5ctuCpEB0WX_vzVc",
    authDomain: "moodprojecto.firebaseapp.com",
    projectId: "moodprojecto",
    storageBucket: "moodprojecto.appspot.com",
    messagingSenderId: "960731513982",
    appId: "1:960731513982:web:f8ffda33f6b09bfcfc842f",
    measurementId: "G-LYYNRZJZ4C"
 };
 
 
 if (!firebase.apps.length) {
	 firebase.initializeApp(firebaseConfig);
 }
export { firebase };
