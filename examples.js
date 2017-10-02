var API = require('./setAPI');

var setA = [1, 2, 3, 4, 5];
var setB = [2, 3, 4];
var setC = [3, 4, 5, 6, 7];

// Union
API.union(setA, setB); // => [ 1, 2, 3, 4, 5 ]
setB.union(setC); // => [ 2, 3, 4, 5, 6, 7 ]

console.log("----- SETS -----");
console.log("setA: " + setA);
console.log("setB: " + setB);
console.log("setC: " + setC);
console.log("-----------------");

console.log("Union:");
console.log("API.union(setA, setB) => ", API.union(setA, setB));
console.log("setB.union(setC) => ", setB.union(setC));
console.log("-----------------");

console.log("Intersection:");
console.log("API.intersection(setA, setB) => ", API.intersection(setA, setB));
console.log("setB.intersection(setC) => ", setB.intersection(setC));
console.log("-----------------");

