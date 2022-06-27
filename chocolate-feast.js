// Input
// int n: Bobby's initial amount of money
// int c: the cost of a chocolate bar
// int m: the number of wrappers he can turn in for a free bar

// Output
// int: the number of chocolates Bobby can eat after taking full advantage of the promotion

function chocolateFeast(n, c, m) {
    let res = Math.floor(n / c);
    
    let wraps = res;
    while (wraps >= m) {
        res += Math.floor(wraps / m);
        wraps = Math.floor(wraps / m) + wraps % m;
    }
    return res;
}

console.log(chocolateFeast(12,4,4))