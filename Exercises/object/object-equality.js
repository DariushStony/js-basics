// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
const address3 = address1;

// check if all the properties of two objects are equal
function areEqual(address1, address2) {
    return (
        address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
    );
}

// check if referencing to same object
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
