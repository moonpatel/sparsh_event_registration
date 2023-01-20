const express = require("express");
const app = express();
const { collection, doc, setDoc } = require("firebase/firestore");
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getDoc } = require("firebase/firestore");
const { query, where, getDocs } = require("firebase/firestore");

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

app.get("/events/:name", async (req, res) => {
  try {
    let registeredUsers = [];
    const q = query(
      collection(db, "users"),
      where("event", "==", req.params.name)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      res.status(404).json({
        status: "This event does not exist",
      });
    } else {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        registeredUsers.push(doc.data());
      });
      console.log(registeredUsers);
      res.status(200).json({
        data: registeredUsers,
      });
    }
  } catch (e) {
    res.status(404).json({
      status: "Unsuccessful",
    });
  }
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
