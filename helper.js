const style = (object) => {
	let str = "";

	Object.keys(object).forEach((key) => {
		str += `${key}: ${object[key]};`;
	});

	return str;
};

const isEmpty = (arg) => {
	if (arg == null) {
		return true;
	} else if (typeof arg === "undefined") {
		return true;
	} else if (arg.length === 0) {
		return true;
	} else if (typeof arg === "object" && Object.keys(arg).length === 0) {
		return true;
	}
	return false;
};

// if types are equal
const typeMatch = (variable, expected = "string") => {
	if (typeof variable === expected) {
		return true;
	}
	return false;
};

module.exports = { style, isEmpty, typeMatch };
