const firebase = require("firebase");

const app = firebase.initializeApp({
        apiKey: "AIzaSyAKSswrQX2Gsq2tcQiUCMGZOpD4CaoLdaY",
        authDomain: "vaccine-f2d1f.firebaseapp.com",
        databaseURL:"https://vaccine-f2d1f-default-rtdb.firebaseio.com",
        projectId: "vaccine-f2d1f",
        storageBucket: "vaccine-f2d1f.appspot.com",
        messagingSenderId: "902351568296",
        appId: "1:902351568296:web:f0f067060b64680b8a719d",
        measurementId: "G-Q0FG9HT434",

});

module.exports = app;