import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAHBPjf3n__nubTObFjn7tw_i8efbkCh4c',
  authDomain: 'musicapp-86a14.firebaseapp.com',
  projectId: 'musicapp-86a14',
  storageBucket: 'musicapp-86a14.firebasestorage.app',
  appId: '1:518054012707:web:848b70f8b87495b37b8e96',
}

export default firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const usersCollection = db.collection('users')

export { auth, db, usersCollection }
