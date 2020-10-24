import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC-YHVpnOS6nfYmRuDsvUDHTxZStT1qayI",
  authDomain: "royal-sky-clothing.firebaseapp.com",
  databaseURL: "https://royal-sky-clothing.firebaseio.com",
  projectId: "royal-sky-clothing",
  storageBucket: "royal-sky-clothing.appspot.com",
  messagingSenderId: "840435294055",
  appId: "1:840435294055:web:27121f65be7482b0c319c2",
  measurementId: "G-HMW299XBFV"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase