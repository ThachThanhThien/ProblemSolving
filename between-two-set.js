// Input: 
// int a[n]: an array of integers
// int b[m]: an array of integers

// Output:
// Number of integer satisfies the conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    a.sort();
    b.sort();
    let res = [];
    if (a[a.length - 1] <= b[0]) {
        for (let i = a[a.length - 1]; i <= b[0]; i++) {
            if (a.every(x => i % x == 0) && b.every(x => x % i == 0)) {
                res.push(i)
            }
        }
        return res.length;
    } else if (b[b.length - 1] <= a[0]) {
        for (let i = b[b.length - 1]; i <= a[0]; i++) {
            if (b.every(x => i % x == 0) && a.every(x => x % i == 0)) {
                res.push(i)
            }
        }
        return res.length;
    } else {
        return 0;
    }
}

console.log(getTotalX([2, 4], [16, 32, 96]));