// Input
// string s: a string

// Output
// int: the minimum number of deletions required

function removeCharAt(s, index) {
    return s.slice(0, index) + s.slice(index + 1);
}

function alternatingCharacters(s) {
    let original = s;
    let index = 0;

    while (index < s.length - 1) {
        if (s.charAt(index) === s.charAt(index + 1)) {
            s = removeCharAt(s, index);
        } else {
            index++;
        }
    }

    return original.length - s.length;
}

console.log(alternatingCharacters('ABABABAB'))