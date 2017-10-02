var intersection = require('./intersection');
var union = require('./union');
var difference = require('./difference');
var membership = require('./membership');

function compareSets(a, b) {
    if (a.length === 0) {
        if (b.length === 0) {
            return 0;
        }
        return -1;
    }

    if (b.length === 0) {
        return 1;
    }

    var result = 0;
    var ia = 0;
    var ib = 0;

    while (ia < a.length && ib < b.length) {
        if (a[ia] === b[ia]) {
            ia++;
            ib++;
        } else if (a[ia] > b[ib]) {
            if (result === 1) {
                return -2;
            }
            ib++;
            result = -1; // a is a subset
        } else if (a[ia] < b[ib]) {
            if (result === -1) {
                return -2;
            }
            ia++;
            result = 1; // a is a superset
        }
    }

    if (ia === a.length && ib === b.length) {
        return result;
    }

    return -2; // sets
}

module.exports = {
    compareSets: compareSets,
    union: union,
    intersection: intersection,
    difference: difference,
    membership: membership
};
