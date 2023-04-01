const priceRanges = [
    {
        label: "$",
        tooltip: "Inexpensive",
        minPerPerson: 0,
        maxPerPerson: 10,
    },
    {
        label: "$$",
        tooltip: "Moderate",
        minPerPerson: 11,
        maxPerPerson: 20,
    },
    {
        label: "$$$",
        tooltip: "Expensive",
        minPerPerson: 21,
        maxPerPerson: 30,
    },
];

let restaurants = [{ averagePerPerson: 5 }];

console.log(priceRanges);
