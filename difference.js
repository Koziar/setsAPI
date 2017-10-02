function difference(a, b) {
    return _difference(a, b);
}

Array.prototype.difference = function(b) {
    return _difference(this, b);
};

function _difference(a, b) {
    return a.filter(function(i) {
        return b.indexOf(i) < 0;
    });
}

module.exports = difference;
