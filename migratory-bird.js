// Input
// int arr[n]: the types of birds sighted

// Output
// int: the lowest type id of the most frequently sighted birds


function migratoryBirds(arr) {
    let seenNumber = Array(5).fill(0);
    for (let i = 0; i < arr.length; i++) {
        seenNumber[arr[i] - 1]++;
    }
    let res = 1;
    let max = seenNumber[0];
    for (let i = 1; i < seenNumber.length; i++) {
        if (seenNumber[i] > max) {
            max = seenNumber[i];
            res = i + 1;
        }
    }
    return res;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))