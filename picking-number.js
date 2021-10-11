// Input
// Given an array of integers, find the longest subarray 
// where the absolute difference between any two elements is less than or equal to
// int a[n]: an array of integers

// Output
// int: the length of the longest subarray that meets the criterion


function pickingNumbers(a) {
    let num = new Array(101).fill(0);
    a.forEach(e => {
        num[e]++;
    });
    let max = 0;
    for (let i = 1; i < 101; i++) {
        max = Math.max(max, (num[i] + num[i - 1]))
    }
    return max;
}


console.log(pickingNumbers([1, 2, 2, 2, 3, 1, 5, 5, 6, 6, 6, 6, 6, 6, 6]))