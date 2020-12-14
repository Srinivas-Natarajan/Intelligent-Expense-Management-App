//import * as firebase from 'firebase';
//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBxy3wPPUYUUrBRUCPZDr_T3mJUSvaUhQ",
    authDomain: "expensify-a7b9c.firebaseapp.com",
    databaseURL: "https://expensify-a7b9c-default-rtdb.firebaseio.com",
    projectId: "expensify-a7b9c",
    storageBucket: "expensify-a7b9c.appspot.com",
    messagingSenderId: "486221890968",
    appId: "1:486221890968:web:f68b1cd00d4543f1e7d7ed",
    measurementId: "G-GCMQ5WYEZ0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


export { firebase, database as default };






// const items = [{
//     description: "Rent",
//     note: "Monthly rent",
//     amount: 50000,
//     createdAt: 0
// },
// {
//     description: "Coffee",
//     note: "Yum",
//     amount: 567,
//     createdAt: 1000
// },
// {
//     description: "Food",
//     note: "Yum",
//     amount: 7890,
//     createdAt: -1000
// }]

// database.ref('expenses').push({
//     description: "Food",
//     note: "Yum",
//     amount: 7890,
//     createdAt: -1000
// })



// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })




// database.ref().set({
//     name: "Srinivas",
//     age: 21,
//     stressLevel: 1,
//     job: {
//         title: "Software Dev",
//         company: "Google"
//     },
//     location: {
//         country: "India",
//         state: "TN",
//         city: "Vellore"
//     },

// }).then(() => {
//     console.log("Data Saved");
// }).catch((error) => {
//     console.log("Error", error);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Chennai"
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })



// database.ref().once('value').then((snapshot) => {
//     console.log(snapshot.val());
// })





// database.ref("isSingle").remove().then(() => {
//     console.log("Data Deleted");
// }).catch((error) => {
//     console.log("Error", error);
// });