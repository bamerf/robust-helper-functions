function isValidName(name) {
	// at least 3 letters
	// remove whitespace
	if (typeof name == "string" && name.trim().length >= 3) {
		return true;
	}
	return false;
}

function isValidNumber(input) {
	// number or string number
	// whole number
	// no negative numbers
	if (typeof input == "string" && input.trim() != "") {
		input = Number(input);
	}
	if (typeof input === "number" && input >= 0 && Number.isInteger(input)) {
		return true;
	}
	return false;
}

function findAllMatching(match, array) {
	// exact match
	// strings (except "" or whitespace-only) can match numbers
	// number (except 'NaN' and '+/- Infinity') can match strings (should check corner case '-0')
	// 'null' can match 'undefined', and vice versa
	// booleans can only match booleans
	// objects only match the exact object
	let ret = [];
	for (let value of array) {
		if (Object.is(match, value)) ret.push(value);
		if (match == null && value == null) ret.push(value);
		if (typeof match == "boolean" && typeof value == "boolean") {
			if (match == value) ret.push(value);
		}
		if (
			typeof match == "string" &&
			match.trim() != "" &&
			typeof value == "number" &&
			!Object.is(value, -0)
		) {
			if (match == value) ret.push(value);
		}
		if (
			typeof match == "number" &&
			typeof value == "string" &&
			value.trim() != "" &&
			!Object.is(match, -0) &&
			!Object.is(match, NaN) &&
			!Object.is(match, Infinity) &&
			!Object.is(match, -Infinity)
		) {
			if (match == value) ret.push(value);
		}
	}
	return ret;
}
