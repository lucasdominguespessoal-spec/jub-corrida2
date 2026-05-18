import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// SUAS CREDENCIAIS DO FIREBASE (Mantenha as suas se forem diferentes)
const firebaseConfig = {
    apiKey: "AIzaSyBx79U7mmK7a7GjUy7oTWm4dA9MHcNwzIA",
    authDomain: "protocolo-de-corrida.firebaseapp.com",
    projectId: "protocolo-de-corrida",
    storageBucket: "protocolo-de-corrida.firebasestorage.app",
    messagingSenderId: "187125786053",
    appId: "1:187125786053:web:28f37fb7a3307c391b17ac",
    measurementId: "G-PX6GH5SF1X"
  };

// Inicializa o Firebase de forma segura
const app = initializeApp(firebaseConfig);

// Exporta os motores de autenticação e banco de dados
export const auth = getAuth(app);
export const db = getFirestore(app);