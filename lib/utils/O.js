var O = {
	_O: Object,

	forIn: function (obj, fn) {
		var k;
		// think about changing the first "O" to "this"
		var hasOwn = O._O.prototype.hasOwnProperty; 

		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				fn.call(obj, k, obj[k]);
			}
		}
	}
};

// ----------------
module.exports = O;
// ----------------