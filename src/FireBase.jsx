import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyDJG7v3IJZJac-pfP_l0iwENq0gDIiDZUc",
    authDomain: "webapp-c0ba4.firebaseapp.com",
    projectId: "webapp-c0ba4",
    storageBucket: "webapp-c0ba4.firebasestorage.app",
    messagingSenderId: "789036275227",
    appId: "1:789036275227:web:99e000a53ae793ebe34abe",
    measurementId: "G-TW6WP6M9JM",
    databaseURL : 'https://webapp-c0ba4-default-rtdb.firebaseio.com',
  };

  export const app = initializeApp(firebaseConfig);
