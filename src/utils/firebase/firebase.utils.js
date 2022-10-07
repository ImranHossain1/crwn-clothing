import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
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

export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email,password)
}
export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email,password)
}

export const signOutUser =async () => signOut(auth)

export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback)