const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}

// lose this when assigning a function
const getName = obj.getName.bind(obj);
console.log(getName());