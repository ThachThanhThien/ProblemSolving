// Input
// int n: the number of non-zero stones
// int a: one possible integer difference
// int b: another possible integer difference

// Output
// int[]: all possible values of the last stone, sorted ascending

function stones(n, a, b) {
    let res = [];
    for (let i = 0; i <= n - 1; i++) {
        res.push((n - 1 - i) * a + i * b);
    }
    return Array.from(new Set(res.sort((a, b) => a - b)))
}
console.log(stones(3, 1, 2))
// console.log(stones(570,573,21));