// es6 class old
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// class new
// is this es6 or what? 
class NewSyntax {
    name = 'Jen';
    // arrow func will bind this to the context when initiate
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());