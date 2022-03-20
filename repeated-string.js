// Input
//     s: a string to repeat
//     n: the number of characters to consider
// Output
//     int: the frequency of a in the substring


function repeatedString(s, n) {
    // let numberOfA = (s.match(/a/g) || []).length;
    let numberOfA = s.split('a').length - 1;
    let res1 = numberOfA * Math.floor((n / s.length));
    let res2 = s.slice(0, n % s.length).split('a').length - 1;
    return res1 + res2;
}

console.log(repeatedString('aaba', 10))