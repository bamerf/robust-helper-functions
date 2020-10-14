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
