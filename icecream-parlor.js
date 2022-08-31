// Input
// int m: the amount of money they have to spend
// int cost[n]: the cost of each flavor of ice cream

// Output
// int[2]: the indices of the prices of the two flavors they buy, sorted ascending

function icecreamParlor(m, arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let otherFlavorIndex = arr.indexOf(m - arr[i], i + 1);
        if (otherFlavorIndex > -1) {
            res.push(...[i + 1, otherFlavorIndex + 1])
            return res;
        }
    }
}

console.log(icecreamParlor(4, [2, 5, 4, 3, 2]));