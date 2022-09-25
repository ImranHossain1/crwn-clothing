import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaxmwq4YM-sfS--C37gYvVLwmtNGtr6Mw",
  authDomain: "crwn-clothing-db-2b689.firebaseapp.com",
  projectId: "crwn-clothing-db-2b689",
  storageBucket: "crwn-clothing-db-2b689.appspot.com",
  messagingSenderId: "662166601837",
  appId: "1:662166601837:web:b90c6400565af81f1fff64"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        }
        catch(error){
            console.log('error creating the user: ', error.message)
        }
    }
    return userDocRef;
    //if user data exists
    //return user doc
    //if user data doesn't exists
}