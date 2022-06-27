// Input
// int width: the width array
// int cases[t][2]: each element contains the starting and ending 
//                  indices for a segment to consider, inclusive

// Output
// int[t]: the maximum width vehicle that can pass through each segment of the service lane described

function serviceLane(width, cases) {
    let res = [];
    for (let item of cases) {
        res.push(width.slice(item[0], item[1] + 1).sort((a, b) => a - b)[0]);
    }
    return res;
}

console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))
