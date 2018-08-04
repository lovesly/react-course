import * as firebase from 'firebase';

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

// on
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (err) => {
    console.log(`Error with data fetching: ${err}`);
});

database.ref().set({
    name: 'zz',
    love: 'sly',
    isSingle: 'true',
    age: '27',
    job: {
        title: 'Software engineer',
        company: 'Google'
    },
    location: {
        city: 'Beijing',
        country: 'China'
    }
}).then(() => {
    console.log('Data saved');
}).catch((err) => {
    console.log(`Error: ${err}`);
});
// get ref(), set a specific value instead of replace the whole object
database.ref('location/city').set('HZ');
database.ref('location/district').set('SJS');

// add an new attributes ref 
database.ref('attributes').set({
    height: 73,
    weight: 160
});

// remove
// could also use set(null) to remove
database.ref('isSingle').remove()
.then(() => {
    console.log('Data was removed.');
}).catch((err) => {
    consooe.log(`Error: ${err}`);
});

// update
database.ref().update({
    'job/company': 'Amazon',
    isSingle: true,
    'location/city': 'Boston'
});

// once, fetch data?
database.ref().once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(`once: ${val}`);
    console.log(val);
}).catch((err) => {
    console.log(`Error: ${err}`);
});

// off the subscriber
database.ref().off(onValueChange);

