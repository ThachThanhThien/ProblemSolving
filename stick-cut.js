// Input
// int arr[n]: the lengths of each stick


// Output
// int[]: the number of sticks after each iteration


function cutTheSticks(arr) {
    let n = {};
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
            n[arr[i]] = 0;
        }
        n[arr[i]]++;
    }
    let res = [arr.length];
    Object.keys(n).forEach(i => {
        res.push(res[res.length - 1] - n[i]);
    })
    res.pop();
    return res;
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))