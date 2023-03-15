import * as firebase from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDoOwh6aDZQg5e-9NHnZlYm_56CtqWdNHI',
  authDomain: 'marketplace-eb319.firebaseapp.com',
  projectId: 'marketplace-eb319',
  storageBucket: 'marketplace-eb319.appspot.com',
  messagingSenderId: '511156687690',
  appId: '1:511156687690:web:a5cac346aa0f6d7042a7b3',
};

const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig) : firebase.getApp();

const db = getFirestore(app)

export default db;