import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyDVA-GYSDV09L6f2QpGXTvxxO0POwcF5Ss",
  authDomain: "fast-food-e782e.firebaseapp.com",
  projectId: "fast-food-e782e",
  storageBucket: "fast-food-e782e.appspot.com",
  messagingSenderId: "494407222950",
  appId: "1:494407222950:web:811d8b25b8072a63bcd667"
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
