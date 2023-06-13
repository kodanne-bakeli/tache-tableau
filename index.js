let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number1 = [19, 5, 7, 125, 20, 9, 15, 62]
let string = ["pommes","poires", "oranges", "ananas", "ada", "ali"]

//MAP

let map = number.map( x => x*2);
console.log(map);

//FILTER

let filter = string.filter( x => x.length > 3)
console.log(filter);


//REDUCE

//addition
let reduce1 = number.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reduce1);

//soustraction
let reduce2 = number.reduce((accumulator, currentValue) => accumulator - currentValue)
console.log(reduce2);

//mutiplication
let reduce3 = number.reduce((accumulator, currentValue) => accumulator * currentValue)
console.log(reduce3);

//division
let reduce4 = number.reduce((accumulator, currentValue) => accumulator / currentValue)
console.log(reduce4);


//SORT

//string
let sort1 = string.sort()
console.log(sort1);
//number
let sort2 = number1.sort((a, b)=> a-b)
console.log(sort2);


//FOR EACH
//string
string.forEach(element => console.log(element))
//number
number.forEach(element => console.log(element))