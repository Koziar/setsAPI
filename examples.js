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
console.log("1. API.union(setA, setB) => ", API.union(setA, setB)); // [ 1, 2, 3, 4, 5 ]
console.log("2. setB.union(setC) => ", setB.union(setC)); // [ 2, 3, 4, 5, 6, 7 ]
console.log("-----------------");

console.log("Intersection:");
console.log("1. API.intersection(setA, setB) => ", API.intersection(setA, setB)); // [ 2, 3, 4 ]
console.log("2. setB.intersection(setC) => ", setB.intersection(setC)); // [ 3, 4 ]
console.log("-----------------");

console.log("Difference:");
console.log("1. API.difference(setA, setB) => ", API.difference(setA, setB)); // [ 1, 5 ]
console.log("2. setB.difference(setC) => ", setB.difference(setC)); // [ 2 ]
console.log("-----------------");

console.log("Membership:");
console.log("1. API.Membership(setA, setB) => ", API.membership(setA, setB)); // [ 1, 5 ]
console.log("2. setB.membership(setC) => ", setB.membership(setC)); // [ 2 ]
console.log("-----------------");