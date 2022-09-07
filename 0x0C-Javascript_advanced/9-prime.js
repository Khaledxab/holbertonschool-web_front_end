function countPrimeNumbers() {
	let p = 0;
	let ip = true;
	for (let c = 2; c <= 100; c = c + 1) {
		ip = true;
		let limit = Math.round(Math.sqrt(c));
		for (let mod = 2; mod <= limit; mod++) {
			if (c % mod == 0) {
				ip = false;
				break;
			}
		}

		if (ip) {
			p = p + 1;
		}
	}
	return p;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log(
	"Execution time of printing countPrimeNumbers was " +
	(end - start) +
	" milliseconds."
);