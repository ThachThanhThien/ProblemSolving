// Input
// string s: the string to analyze

// Output
// int: the number of words in s

function camelcase(s) {
    let res = 1;
    s = Array.from(s);
    for (let c of s) {
        if (c.toUpperCase() === c) {
            res++;
        }
    }
    return res;
}

console.log(camelcase('thisIsATestString'))