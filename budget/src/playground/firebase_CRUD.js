import * as firebase from 'firebase';
import moment from 'moment';

var config = {
    apiKey: "AIzaSyCMZZ9xuTnyMogWcetC3IWHRXEL_vXasbg",
    authDomain: "react-budget-zz.firebaseapp.com",
    databaseURL: "https://react-budget-zz.firebaseio.com",
    projectId: "react-budget-zz",
    storageBucket: "react-budget-zz.appspot.com",
    messagingSenderId: "102959716412"
};

firebase.initializeApp(config);
const database = firebase.database();

const onValueChange = database.ref('expenses').on('value', (snapshot) => {
    const myArr = [];
    snapshot.forEach((child) => {
        myArr.push({
            id: child.key,
            ...child.val()
        });
    });
    console.log(myArr);
}, (err) => {
    console.log(`Error with data fetching: ${err}`);
});


database.ref('expenses').on('child_removed', (snapshot) => {
    console.log('child_removed');
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log('child_changed');
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log('child_added');
    console.log(snapshot.key, snapshot.val());
});

// --------------------------------------------- // 
// transfer firebase data to array
// database.ref('expenses').once('value')
// .then((snapshot) => {
//     const myArr = [];
//     snapshot.forEach((child) => {
//         myArr.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(myArr);
// });

// --------------------------------------------- // 
// create initial data
// get rid of keep pushing same objects
// database.ref('expenses').remove();

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1250,
//     createdAt: moment.now()
// });

// database.ref('expenses').push({
//     description: 'Condom',
//     note: '',
//     amount: 150,
//     createdAt: moment.now()
// });

// database.ref('expenses').push({
//     description: 'Coffee',
//     note: '',
//     amount: 250,
//     createdAt: moment.now()
// });

// --------------------------------------------- // 
// firebase doesn't support array

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my first note'
// }, {
//     id: '32',
//     title: 'Second note',
//     body: 'This is my second note'
// }];

// // valid structure
// const firebaseNotes = {
//     notes: {
//         'someId': {
//             title: 'First note',
//             body: 'This is my first note'
//         }, 
//         'someOtherId': {
//             title: 'Second note',
//             body: 'This is my second note'
//         }
//     }
// };