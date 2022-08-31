// Input 
// string s: a string
// int queries[n]: an array of integers


// Output
// string[n]: an array of strings that answer the queries


function weightedUniformStrings(s, queries) {
    let allWeight = {};

    for (let item of s.match(/(.)\1*/g)) {
        let weight = item.charCodeAt(0) - 96;
        for (let i = 0; i < item.length; i++) {
            allWeight[weight * (i + 1)] = true;
        }
    }
    let res = [];
    for (let item of queries) {
        if (allWeight[item]) {
            res.push('Yes')
        } else {
            res.push('No')
        }
    }
    return res;
}

console.log(weightedUniformStrings('abccddde',[1, 3, 12, 5, 9, 10]))
