var API = require('./setTheory');

var setA = [1, 2, 3, 4, 5];
var setB = [2, 3, 4];
var setC = [3, 4, 5, 6, 7];

API.union(setA, setB); // => [ 1, 2, 3, 4, 5 ]
