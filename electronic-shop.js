// Input
// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget

// Output
// int: the maximum that can be spent, or -1 if it is not possible to buy both items


function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    keyboards.forEach(k => {
        drives.forEach(d => {
            if (k + d > max && k + d <= b) {
                max = k + d;
            }
        })
    })
    return max;
}