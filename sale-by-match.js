// Input
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

// Output
// int: the number of pairs


function sockMerchant(n, ar) {
    ar.sort();
    let res = 0;
    let count = 1;
    let first = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] == first) {
            count++
        }
        if (ar[i] != first || i == ar.length - 1) {
            res += Math.floor(count / 2);
            first = ar[i];
            count = 1;
        }
    }
    return res;
}

console.log(sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))