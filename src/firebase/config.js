import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCX3FfU-QYSO5uJkXjs7a1DYiBpTvjVu3A",
  authDomain: "reactdemo-d5adb.firebaseapp.com",
  projectId: "reactdemo-d5adb",
  storageBucket: "reactdemo-d5adb.firebasestorage.app",
  messagingSenderId: "669326876153",
  appId: "1:669326876153:web:7a30069d1e754b4a6c7128"
}

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}