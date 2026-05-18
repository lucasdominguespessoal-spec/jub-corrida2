import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// SUAS CREDENCIAIS DO FIREBASE (Mantenha as suas se forem diferentes)
const firebaseConfig = {
    apiKey: "AIzaSyAs7...", 
    authDomain: "jub-corrida2.firebaseapp.com",
    projectId: "jub-corrida2",
    storageBucket: "jub-corrida2.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
};

// Inicializa o Firebase de forma segura
const app = initializeApp(firebaseConfig);

// Exporta os motores de autenticação e banco de dados
export const auth = getAuth(app);
export const db = getFirestore(app);