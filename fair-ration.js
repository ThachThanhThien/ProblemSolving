// Every time you give a loaf of bread to some person i, 
// you must also give a loaf of bread to the person 
// immediately in front of or behind them in the line
// After all the bread is distributed, each person must have an even number of loaves

// Input
// int B[N]: the numbers of loaves each persons starts with

// Output
// string: the minimum number of loaves required, cast as a string, or 'NO'

function fairRations(B) {
    let res = 0;
    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 === 1) {
            B[i]++;
            res++;
            if (B[i + 1]) {
                B[i + 1]++;
                res++;
            } else if (B[i - 1]) {
                B[i - 1]++;
                res++;
            }
        }
    }
    if (B.every(item => item % 2 === 0)) {
        return res.toString();
    } else {
        return 'NO';
    }
}

console.log(fairRations([4, 5, 6, 7]));
console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([2, 2, 2, 2]));
console.log(fairRations([1, 2]));