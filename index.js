const express = require("express");
const app = express();
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAM40dAArC96r9KKNvOzM7g2WQQqDJka10",
    authDomain: "fir-basics-35bef.firebaseapp.com",
    projectId: "fir-basics-35bef",
    storageBucket: "fir-basics-35bef.appspot.com",
    messagingSenderId: "342966114039",
    appId: "1:342966114039:web:8bcbdaf7ec54a729f765f2",
    measurementId: "G-BHZDSN09D5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);
