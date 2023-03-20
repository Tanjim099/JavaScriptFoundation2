// const items = {
//     "apple": 1.99,
//     "banana": 0.99,
//     "orange": 2.49,
//     "pear": 1.49,
// };
// const exchangeRate = 80;

// const convertedItems = Object.entries(items).map(([item, price])=>{
//     return [item, price * exchangeRate];
// });

// const convertedPrices = Object.fromEntries(convertedItems);
// console.log(convertedPrices);




const items = {
    "apple": 1.99,
    "banana": 0.99,
    "orange": 2.49,
    "pear": 1.49,
};
const exchangeRate = 80;

const convertedItems = Object.entries(items)
const update = convertedItems.map(([item, price])=>{
    return [item, price * exchangeRate];
});

const convertedPrices = Object.fromEntries(update);
console.log(convertedPrices);