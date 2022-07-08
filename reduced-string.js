// Input
// string s: a string to reduce

// Output
// string: the reduced string or Empty String

function superReducedString(s) {
    s = Array.from(s);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            s.splice(i - 1, 2);
            i = 0;
        }
    }
    return s.join('') || 'Empty String';
}

console.log(superReducedString('abba'))