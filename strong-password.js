// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+

// InputÍ
// int n: the length of the password
// string password: the password to test

// Output
// int: the minimum number of characters to add

function minimumNumber(n, password) {
    password = Array.from(password);
    for(let i = 0; i < n; i++) {
        if (!isNaN(+password[i])) {
            password[i] = '1';
        }
        if (/[a-z]+$/.test(password[i])) {
            password[i] = 'a';
        }
        if (/[A-Z]+$/.test(password[i])) {
            password[i] = 'A';
        }
        if (/^[!@#$%^&*()\-+]$/.test(password[i])) {
            password[i] = '@';
        }
    }
    let need = 4 - new Set(password).size;
    return n + need >= 6 ? need : 6 - n;
}

// console.log(minimumNumber(8, 'Ab1@Cd5$'));
// console.log(minimumNumber(7, 'aaaaaaa'));
console.log(minimumNumber(100, 'G0N1+93Gy0C!J4ECIc53+30O9az$K-TgDO^051y2+Qfvt94qI!k)lS(-8g65^A9mt%eRL5WP#f8R)i4O33j#&LNk6H%-pr-@d^*Z'));