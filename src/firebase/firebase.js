//import * as firebase from 'firebase';
//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, googleAuthProvider, githubAuthProvider, database as default };






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