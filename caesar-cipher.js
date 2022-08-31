// Input
// string s: cleartext
// int k: the alphabet rotation factor

// Output
// string: the encrypted string

function caesarCipher(s, k) {
    let res = '';
    k = k % 26;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code >= 97 && code <= 122)) {
            code = code + k > 122 ? code + k - 26 : code + k
            res += String.fromCharCode(code)
        } else if ((code >= 65 && code <= 90)){
            code = code + k > 90 ? code + k - 26 : code + k
            res += String.fromCharCode(code)
        } else {
            res += s[i];
        }
    }
    return res;
}

console.log(caesarCipher('middle-Outz', 2))
