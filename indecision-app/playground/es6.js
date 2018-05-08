var name = 'sfe';
var name = 'sfsdfsdfe';
console.log('name', name);

let nameLet = 'let';
nameLet = 'sdfe';
console.log('let', nameLet);

// block level scoping
// let const
var fullName = 'some shit';
if (fullName) {
    var firstName = fullName.split(' ')[0];
} 
console.log(firstName);


// 1 another function scope
const funcs = [];

function createfunc(i) {
    return function() { console.log("My value: " + i); };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
    funcs[i]();
}
// 2 iffe
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(index) {
        return function() {
            console.log('iffe: ', index);
        }
    }(i));
}
for (var i = 0; i < 3; i++) {
    funcs[i]();
}
// 3 bind
for (var i = 0; i < 3; i++) {
    funcs[i] = function(x) {
        console.log('bind: ', x);
    }.bind(null, i);
}
for (var i = 0; i < 3; i++) {
    funcs[i]();
}
