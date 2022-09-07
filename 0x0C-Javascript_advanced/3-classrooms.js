function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function () {
			return seat;
		  };
		}
	let students = [];
	for (let i = 0; i < numbersOfStudents; i++) {
		let students_seats = studentSeat(i + 1);
		students[i] = students_seats;
	}
	return students;
}

let classRoom = createClassRoom(10);