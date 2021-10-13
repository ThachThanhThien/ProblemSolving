// Input
// int n: the number of growth cycles to simulate

// Output
// int: the height of the tree after the given number of cycles


function utopianTree(n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 2;
    } else {
        if (n % 2 == 0) {
            return utopianTree(n - 1) + 1;
        } else {
            return 2 * utopianTree(n - 1);
        }
    }
}

console.log(utopianTree(0))
console.log(utopianTree(1))
console.log(utopianTree(4))