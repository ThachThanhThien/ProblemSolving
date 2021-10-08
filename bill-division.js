// Input
// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// Output
// If Brian did not overcharge Anna, print Bon Appetit on a new line; 
// otherwise, print the difference that Brian must refund to Anna. This will always be an integer

function bonAppetit(bill, k, b) {
    let res = '';
    let sum = bill.reduce((a, b) => a + b, 0);
    let share = (sum - bill[k]) / 2;
    if (b > share) {
        res = b - share;
    } else {
        res = 'Bon Appetit';
    }

    return res;
}

console.log(bonAppetit([3, 10, 2, 8], 1, 7))