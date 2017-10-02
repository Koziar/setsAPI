function membership(a, b) {
    return _membership(a, b);
}

Array.prototype.membership = function(b) {
    return _membership(this, b);
};

function _membership(a, b) {
	var comparitor = b;
	var member = true;

	if(a.length < b.length) {
		comparitor = a;
	}

	for (var i = comparitor.length - 1; i >= 0; i--) {
		if (!b.includes(comparitor[i])) {
			member = false;
			break;
		}
	}
	
	return member;
}

module.exports = membership;
