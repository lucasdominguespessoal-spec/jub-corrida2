import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// Configuração estratégica do Firebase com os tokens do seu app
const firebaseConfig = {
  apiKey: "AIzaSyBx79U7mmK7a7GjUy7oTwm4dA9MHcNwzIA",
  authDomain: "protocolo-de-corrida.firebaseapp.com",
  projectId: "protocolo-de-corrida",
  storageBucket: "protocolo-de-corrida.firebasestorage.app",
  messagingSenderId: "187125786053",
  appId: "1:187125786053:web:28f37fb7a3307c391b17ac",
  measurementId: "G-PX6GH5SF1X"
};

// Inicializa o Firebase para o navegador obter o acesso correto
const app = initializeApp(firebaseConfig);

export default app;