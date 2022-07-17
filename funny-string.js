// A string is funny when the absolute difference in the ascii values 
// of the characters at positions 0 and 1, 1 and 2 and so on to the end is the same
// for both it own and the copy of the string in reverse. 

// Input
// string s: a string to test

// Output
// string: either Funny or Not Funny

function funnyString(s) {
    let diff = [];
    for (let i = 0; i < s.length - 1; i++) {
        diff.push(Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i)))
    }
    return JSON.stringify(diff)==JSON.stringify(diff.reverse()) ? 'Funny' : 'Not Funny';
}

console.log(funnyString('tuvqxpwrzxqsyumotzrxuzsxqxsvpsxzwqxzuztyrvptmrxtwrsxzstlrwyvouywzxumtlpuyzrtytyrtyvyuxzyqtwqyszwoprxytvzuvqrxzrysuvwrtuyuxyvwotltzumouxrxpwpxrxuomuztltowvyxuyutrwvusyrzxrqvuzvtyxrpowzsyqwtqyzxuyvytrytytrzyupltmuxzwyuovywrltszxsrwtxrmtpvrytzuzxqwzxspvsxqxszuxrztomuqwunltyrzsxwv'))