import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfM4lEqk0AVi6Kjxo_iVLIJvY8X9Bmn4",
  authDomain: "coderhouse-ecommerce-39f1c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-39f1c",
  storageBucket: "coderhouse-ecommerce-39f1c.appspot.com",
  messagingSenderId: "1061070562264",
  appId: "1:1061070562264:web:55a76f8bce4408663648ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
