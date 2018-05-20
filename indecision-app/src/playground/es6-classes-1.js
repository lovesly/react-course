
class Person {
    constructor (name = 'default', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreting() {
        return `Hi, ${this.name}!`;
    }
    getDescription() {
        return `name: ${this.name}\nage: ${this.age}`;
    }
}

class Student extends Person {
    constructor (name, age, score) {
        super(name, age);
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    hasScore() {
        return !!this.score;
    }
    // override
    getDescription() {
        const description = super.getDescription();
        const scoreMsg = this.hasScore() ? this.score : 'N/A';
        return `${description}\nscore: ${scoreMsg}`;
    }
}

class Traveler extends Person {
    constructor (name, age, location) {
        super(name, age);
        this.location = location;
    }
    getDescription() {
        const description = super.getDescription();
        // when to use !!
        const locMsg = this.location || 'N/A';
        return `${description}\nlocation: ${locMsg}`;
    }
}

const me = new Person('ZZ', 27);
// console.log(me.getGreting());
// console.log(me.getDescription());

const student1 = new Student('ZZ', 27, 90);
console.log(student1.getDescription());
console.log(student1.hasScore());

const traveler = new Traveler('ZZ', 27, 'Beijing');
console.log(traveler.getDescription());