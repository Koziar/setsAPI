function compliment(a, b) {
    return _compliment(a, b);
}

Array.prototype.compliment = function(b) {
    return _compliment(this, b);
}

function _compliment(a, b) {
	return a.filter((elem) => b.indexOf(elem) === -1)
}

module.exports = compliment
