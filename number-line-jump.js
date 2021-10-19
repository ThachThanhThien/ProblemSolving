// Input
// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2

// Output
// string: either YES or NO


function kangaroo(x1, v1, x2, v2) {
    let z = (x2 - x1) / (v1 - v2);
    return z > 0 && Number.isInteger(z) ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2))