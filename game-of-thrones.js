// Input
// string s: a string to analyze

// Output
// string: either YES or NO

function gameOfThrones(s) {
    let fS = {};
    for (let char of Array.from(s)) {
        if (!fS[char]) {
            fS[char] = 0;
        }
        fS[char]++;
    }

    if (s.length % 2 === 0) {
        return Object.values(fS).filter(item => item % 2 == 1).length > 0 ? 'NO' : 'YES';
    } else {
        return Object.values(fS).filter(item => item % 2 === 1).length !== 1 ? 'NO' : 'YES';
    }

}

console.log(gameOfThrones('cdcdcdcdeeeef'))