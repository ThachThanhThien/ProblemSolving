// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// Input
// string s1: a string
// string s2: another string

// Output
// string: either YES or NO

function twoStrings(s1, s2) {
    const buildFS = (s) => {
        let res = {};
        for (let item of Array.from(s)) {
            if (!res[item]) {
                res[item] = true;
            }
        }
        return res;
    }
    let fS1 = buildFS(s1);
    let fS2 = buildFS(s2);
    
    for (let char of Object.keys(fS1)) {
        if (fS2[char]) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(twoStrings('hellow', 'world'))
console.log(twoStrings('hi', 'world'))