// Input
// Given a range of numbered days, [i..j] and a number k, 
// determine the number of days in the range that are beautiful. 
// Beautiful numbers are defined as numbers where [n-reverse(n)] is evenly divisible by k. 
// If a day's value is a beautiful number, it is a beautiful day. 


// Output
// int: the number of beautiful days in the range

function reverse(n) {
    return +(n.toString().split('').reverse().join(''))
}

function beautifulDays(i, j, k) {
    let res = 0;
    for (let x = i; x <= j; x++) {
        if (Math.abs(x - reverse(x)) % k == 0) {
            res++
        }
    }
    return res;
}

console.log(beautifulDays(20, 23, 6))