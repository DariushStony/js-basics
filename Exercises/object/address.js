// street
// city
// zipCode,
// showAddress (address)

const addressObject = {
    street: "Kamraneye",
    city: "Tehran",
    zipCode: "11223344",
};

function showAddress(address) {
    for (let key in address) console.log(key, address[key]);
}

showAddress(addressObject);
