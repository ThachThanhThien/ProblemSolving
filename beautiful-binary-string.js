// A binary string is beautiful if and only if it doesn't contain the substring 010

// Input
// string b: a string of binary digits

// Output
// int: the minimum moves required

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function beautifulBinaryString(b) {
    let res = 0;
    for (let i = 0; i < b.length - 2; i++) {
        if (b.charAt(i) === '0' && b.charAt(i + 1) === '1' && b.charAt(i + 2) === '0') {
            b = b.replaceAt(i + 2, '1');
            console.log(b)
            res++;
        }
    }
    return res;
}

console.log(beautifulBinaryString('0101010'))