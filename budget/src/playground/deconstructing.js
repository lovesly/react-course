const person = {
    name: 'zz',
    age: 27,
    location: {
        city: 'Beijing',
        temp: 35,
    }
};
const { name: firstName = 'Shit', age } = person;
console.log(`${ firstName } is ${ age }`);

// wrong memory. I thought it's temperature: temp
const { location: { city, temp: temperature } } = person;

if (city && temperature) {
    console.log(`It's ${ temperature } in ${ city }`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const { publisher: { name = 'Self-Published' } } = book;
console.log(name);

console.log(Array(50).fill('-').join(''));
// Array destructuring
const address = ['1299 Street', 'Philadelphia', 'Pennsylvnia', '19147'];
const [, _city, state, zipcode] = address;
console.log(`You are in ${_city}, ${state}, ${zipcode}.`);