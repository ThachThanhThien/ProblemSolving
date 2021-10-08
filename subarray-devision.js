// Input 

// int s[n]: the numbers on each of the squares of chocolate
// int d: The sum of the integers on the squares
// int m: The length of the segment matches

// Output
// int: the number of ways the bar can be divided


function birthday(s, d, m) {
    let res = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j]
        }
        if (sum === d) res++;
    }
    return res;
}

console.log(birthday([1, 2, 1, 2, 1, 2], 3, 2))