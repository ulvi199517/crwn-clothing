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

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;