let x = Number(prompt("Write a number from 1 to 4"));

if (x == 1) {
	let result = x * 2;
    alert(result);
}
if (x == 2) {
    let result = x - x / 0;
    alert(result)
}
if (x == 3) {
    let result = 0 * Infinity;
    alert(result)
}
if (x == 4) {
    let result = x * 40000000 > Infinity;
    alert(result)
} else if (x > 4) {
    alert("Wrong Number")
} 