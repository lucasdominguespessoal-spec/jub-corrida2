import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBx79U7mmK7a7GjUy7oTWm4dA9MHcNwzIA",
  authDomain: "protocolo-de-corrida.firebaseapp.com",
  projectId: "protocolo-de-corrida",
  storageBucket: "protocolo-de-corrida.firebasestorage.app",
  messagingSenderId: "187125786053",
  appId: "1:187125786053:web:28f37fb7a3307c391b17ac",
  measurementId: "G-PX6GH5SF1X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);