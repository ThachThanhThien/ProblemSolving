// Input
//     int a: the lower range boundary
//     int b: the upper range boundary

// Output
//     int: the number of square integers in the range

function squares(a, b) {
    return Math.ceil(Math.sqrt(a)) - Math.floor(Math.sqrt(b)) + 1;
}

console.log(squares(1, 100))