// Input 
// int n: the value to analyze

// Output
// int: the number of digits in n that are divisors of n


function findDigits(n) {
    let res = 0;
    let arr = n.toString().split('');
    arr.forEach(a => {
        if (a !== 0 && n % a === 0) res++;
    })
    return res;
}

console.log(findDigits(1012));