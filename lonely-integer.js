// Given an array of integers, where all elements but one occur twice, find the unique element.
// Input
// int a[n]: an array of integers


// Output
// int: the element that occurs only once

function lonelyinteger(a) {
    // let res;
    // let occurence = {};
    // for(let i of a) {
    //     if (!occurence[i]) {
    //         occurence[i] = 0;
    //     }
    //     occurence[i]++;
    // }

    // Object.keys(occurence).forEach(item => {
    //     if (occurence[item] === 1) {
    //         res = item
    //     }
    // });
    // return res;
    // Use XOR
    return a.reduce((a, b) => a ^ b)
}

console.log(lonelyinteger([0, 0 , 1, 2, 1]))