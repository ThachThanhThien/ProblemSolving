// Input
// int p[n]: an array of integers

// Output
// int[n]: the values of y for all x in the arithmetic sequence 1 to n


function permutationEquation(p) {
    let res = []
    for (let i = 1; i <= p.length; i++) {
        let index = p.indexOf(i) + 1;
        res.push(p.indexOf(index) + 1);
    }
    return res;
}

console.log(permutationEquation([5, 2, 1, 3, 4]))