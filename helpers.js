function getById(userId) {
	return userRecords.find(function matchId(record) {
		return record.id == userId;
	});
}

function sortAndPrint(recordIds) {
	const records = recordIds.map(getById);

	// mutates
	records.sort(function sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		if (record1.name > record2.name) return 1;
		if ((record1.name = record2.name)) return 0;
	});

	records.forEach(function print(record) {
		console.log(
			`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
		);
	});
}

function addNewRecords() {
	const newRecords = records.filter(function checkRecord(record) {
		return record.new && !currentRecords.includes(record);
	});
	return [...currentRecords, ...newRecords];
}
