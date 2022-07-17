// Input
// int n: an integer

// Output
// Print a staircase.

function staircase(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += ' ';
        }
        for (let j = 1; j <= i; j++) {
            string += '#';
        }
        string += '\n'
    }
    console.log(string);
}

staircase(6);