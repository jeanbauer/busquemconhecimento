import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
const firestore = firebase.firestore()

const login = () =>
  auth
    .signInWithPopup(googleProvider)
    .catch(error => console.log('Auth error: ', error))

export { auth, firebase, firestore, login }
