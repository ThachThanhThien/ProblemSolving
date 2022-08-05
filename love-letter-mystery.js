// Each reduction in the value of any letter is counted as a single operation.
// Find the minimum number of operations required to convert a given string into a palindrome.

// Input
// string s: the text of the letter

// Output
// int: the minimum number of operations

function theLoveLetterMystery(s) {
    let res = 0;

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        res += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
    }

    return res;

}

console.log(theLoveLetterMystery('abc'))
console.log(theLoveLetterMystery('abcba'))
console.log(theLoveLetterMystery('abcd'))
console.log(theLoveLetterMystery('cba'))