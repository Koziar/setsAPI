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

function union(a, b) {
    return _arrayUnique(a.concat(b));
}

Array.prototype.union = function(b) {
    return _arrayUnique(this.concat(b));
}

function _arrayUnique(array) {
    var a = array.concat();
    for(var i = 0; i < a.length; ++i) {
        for(var j = i + 1; j < a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

function intersection(a, b) {
 // implement logic
}

Array.prototype.intersection = function(b) {
 // implement logic
}

module.exports = {
    compareSets: compareSets,
    union: union
};
