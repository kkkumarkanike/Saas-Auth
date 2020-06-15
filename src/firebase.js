import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfnNDqARIuXTHOGWrWEplE1m4MnU1ffpo",
    authDomain: "saas-auth-ceb25.firebaseapp.com",
    databaseURL: "https://saas-auth-ceb25.firebaseio.com",
    projectId: "saas-auth-ceb25",
    storageBucket: "saas-auth-ceb25.appspot.com",
    messagingSenderId: "122996386917",
    appId: "1:122996386917:web:56cd618c934fbd6e5b2a8c",
    measurementId: "G-DYWLLSRQ7H"
}

firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// const storage = firebase.storage();
export {firebase as default};