import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx79U7mmK7a7GjUy7oTwm4dA9MHcNwzIA",
  authDomain: "protocolo-de-corrida.firebaseapp.com",
  projectId: "protocolo-de-corrida",
  storageBucket: "protocolo-de-corrida.firebasestorage.app",
  messagingSenderId: "187125786053",
  appId: "1:187125786053:web:28f37fb7a3307c391b17ac",
  measurementId: "G-PX6GH5SF1X"
};

const app = initializeApp(firebaseConfig);
export default app;