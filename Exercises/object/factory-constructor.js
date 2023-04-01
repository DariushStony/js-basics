// use factory function
// use constructor function

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = createAddress("a", "b", "c");
const address2 = new Address("d", "e", "f");

console.log(address1);
console.log(address2);
