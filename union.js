
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

module.exports = union;
