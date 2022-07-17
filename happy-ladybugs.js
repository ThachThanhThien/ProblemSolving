// A ladybug is happy only when its left or right adjacent cell 
// is occupied by another ladybug having the same color.
// In a single move, you can move a ladybug from its current position to any empty cell.

// Input
// string b: the initial positions and colors of the ladybugs

// Output
// string: either YES or NO

function happyLadybugs(b) {
    b = b.split('');
    let charMap = {};
    b.forEach(c => {
        if (!charMap[c]) {
            charMap[c] = 0;
        }
        charMap[c]++
    });

    if (charMap['_'] > 0) {
        if (Object.keys(charMap).length === 1) {
            return 'YES';
        } else {
            for (let key of Object.keys(charMap)) {
                if (key !== '_' && charMap[key] === 1) {
                    return 'NO';
                }
            }
            return 'YES';
        }
    } else {
        if (b.length === 1) {
            return 'NO';
        }
        for (let i = 1; i < b.length; i++) {
            if (b[i] !== b[i-1] && b[i] !== b[i+1]) {
                return 'NO';
            }
        }
        return 'YES'
    }
}

console.log(happyLadybugs('G'));
// console.log(happyLadybugs('GR'));
// console.log(happyLadybugs('_GR_'));
// console.log(happyLadybugs('_R_G_'));
// console.log(happyLadybugs('R_R_R'));
// console.log(happyLadybugs('RRGGBBXX'));
// console.log(happyLadybugs('RRGGBBXY'));