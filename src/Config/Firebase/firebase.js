import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDa8mOo0wXkGqBCsx356wUb_sHug-YrNns",
    authDomain: "contact-app-52941.firebaseapp.com",
    projectId: "contact-app-52941",
    storageBucket: "contact-app-52941.firebasestorage.app",
    messagingSenderId: "882890846758",
    appId: "1:882890846758:web:516c81f89d451f1fae6ce7"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }