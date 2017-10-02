
function intersection(a, b) {
    return _intersection(a, b);
}

Array.prototype.intersection = function(b) {
    return _intersection(this, b);
}

function _intersection(a, b) {
    var temp;
    if (b.length > a.length) {
        temp = b;
        b = a;
        a = temp;
    };
    
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    }).filter(function (e, i, c) { // remove duplicates
        return c.indexOf(e) === i;
    });;
}

module.exports = intersection
