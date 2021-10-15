// Input
// int n: the day number to report

// Output
// int: the cumulative likes at that day

function viralAdvertising(n) {
    let people = 5;
    let like = 2;
    let res = 0;
    for (let i = 1; i <= n; i++) {
        people = Math.floor(people / 2);
        res += people;
        people *= 3;
    }
    return res;
}
console.log(viralAdvertising(5))