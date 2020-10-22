import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCDTXVh16I1HvI85cOL2tDwcxwuqJgLhZE",
        authDomain: "crwn-db-fffb5.firebaseapp.com",
        databaseURL: "https://crwn-db-fffb5.firebaseio.com",
        projectId: "crwn-db-fffb5",
        storageBucket: "crwn-db-fffb5.appspot.com",
        messagingSenderId: "485522104293",
        appId: "1:485522104293:web:9b67fd0244707fcd8cd90c",
        measurementId: "G-M24K4PREW3"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;