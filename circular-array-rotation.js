// Input
// int a[n]: the array to rotate
// int k: the rotation count
// int queries[1]: the indices to report

// Output
// int[q]: the values in the rotated a as requested in m


function circularArrayRotation(a, k, queries) {
    let rotationTime = k % a.length;
    let rotatedArr = [];

    rotatedArr = a.slice(a.length - rotationTime).concat(a.slice(0, a.length - rotationTime));
    let res = []
    queries.forEach(q => {
        res.push(rotatedArr[q]);
    })
    return res;
}

console.log(circularArrayRotation([1, 2, 3], 3, [0, 1, 2]))