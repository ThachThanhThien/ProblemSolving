// Input
// int arr[n]: an array of integers

// Output
// int[]: an array of integers as described

function closestNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let diffObj = {};
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (!diffObj[diff]) {
            diffObj[diff] = [];
        }
        diffObj[diff].push(...[arr[i - 1], arr[i]]);
    }
    let min = Object.keys(diffObj).sort((a, b) => a - b)[0];
    return diffObj[min];
}


console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]));
console.log(closestNumbers([-5, 15, 25, 71, 63]))