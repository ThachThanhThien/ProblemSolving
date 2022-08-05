// Input
// int arr[n]: an unsorted array of integers

// Output
// int: the median of the array

function findMedian(arr) {
    let min = 10000;
    let max = -10000;

    let middle = Math.ceil(arr.length / 2);
    let frequency = {};

    for (let num of arr) {
        if (!frequency[num]) {
            frequency[num] = 0
        }
        frequency[num]++;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    let count = 0;
    for (let i = min; i <= max; i++) {
        if (frequency[i]) {
            count += frequency[i]
        }
        if (count >= middle) {
            return i;
        }
    }
}

console.log(findMedian([0, 3, 1, 5, 4, 2, 6]))