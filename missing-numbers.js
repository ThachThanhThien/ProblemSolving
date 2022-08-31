// Input
// int arr[n]: the array with missing numbers
// int brr[m]: the original array of numbers

// Output
// int[]: an array of integers

function missingNumbers(arr, brr) {
    const buildFS = (s) => {
        let res = {};
        for (let item of s) {
            if (!res[item]) {
                res[item] = 0;
            }
            res[item]++;
        }
        return res;
    }
    let a = buildFS(arr);
    let b = buildFS(brr);
    let res = [];

    for (let key of Object.keys(b)) {
        a[key] = a[key] || 0;
        if (b[key] !== a[key]) {
            res.push(key);
        }
    }
    return res.sort((a, b) => a - b);
}

console.log(missingNumbers([203, 204, 205, 206, 207, 208, 203, 204 ,205 ,206], 
    [203,204, 204, 205, 206, 207, 205, 208, 203, 206 ,205 ,206 ,204, 3]))