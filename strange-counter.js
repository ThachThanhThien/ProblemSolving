// https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true

// Input
// int t: an integer

// Output
// int: the value displayed at time t

function strangeCounter(t) {
    let rem = 3
    while (rem - 2 > t || t > 2 * rem - 3) {
        rem *= 2;
    }
    return 2 * rem - t - 2;
}

console.log(strangeCounter(15));