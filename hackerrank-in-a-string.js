// Input
// string s: a string

// Output
// string: YES or NO

function hackerrankInString(s) {
    const hackerank = 'hackerrank';
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === hackerank.charAt(index)) {
            index++;
        };
    }
     return index < hackerank.length - 1 ? 'NO' : 'YES';
}

console.log(hackerrankInString('hhaacckkekraraannk'));
console.log(hackerrankInString('hackerrakk'));