// A pangram is a string that contains every letter of the alphabet

// Input
// string s: a string to test

// Output
// string: either pangram or not pangram

function pangrams(s) {
    return new Set((s.toLowerCase().replace(/\s/g,''))).size === 26 ? 'pangram' : 'not pangram';
}

console.log(pangrams('Weeee promptly judged antique ivory buckles for the next prize'))