// Find an element of the array such that 
// the sum of all elements to the left is equal to the sum of all elements to the right

// Input
// int arr[n]: an array of integers

// Output
// string: either YES or NO

function balancedSums(arr) {
    let left = [].reduce((prev, cur) => prev + cur, 0);
    let mid = arr[0];
    let rightArr = arr.slice(1)
    let right = rightArr.reduce((prev, cur) => prev + cur, 0);
    if (left === right) {
        return 'YES';
    }
    let res = 'NO';
    for (let i = 1; i < arr.length; i++) {
        left += mid;
        mid = arr[i];
        right -= rightArr.shift();
        if (left === right) {
            res = 'YES';
            break;
        }
    }
    return res;
}

console.log(balancedSums([0, 0,2,0]))