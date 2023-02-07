import { initializeApp } from 'firebase/app';
import {ref, get,getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA0g8ZHKsi-s4Ctm3d6za7xDc8_f2NoUag",
    authDomain: "todotask-90966.firebaseapp.com",
    databaseURL: "https://todotask-90966-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todotask-90966",
    storageBucket: "todotask-90966.appspot.com",
    messagingSenderId: "778302809056",
    appId: "1:778302809056:web:86800f5e35a119dac70185"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase()
