// A modified Kaprekar number is a positive whole number with a special property.
// If you square it, then split the number into two integers and sum those integers, 
// you have the same value you started with.
// Ex: 45^2 = 2025 and 20 + 25 = 45

// Input 
// int p: the lower limit
// int q: the upper limit
// Output
// List of modified Kaprekar numbers between p and q

function isModifiedKaprekarNumber(n) {
    if (n === 1) return true;
    let nSquare = n * n;
    let center = nSquare.toString().length % 2 === 0 ? nSquare.toString().length / 2 : Math.floor(nSquare.toString().length / 2)
    let l = +(nSquare.toString()).slice(0,center);
    let r = +(nSquare.toString()).slice(center);
    return (l > 0 && r > 0 && l + r === n) ? true : false;
}

function kaprekarNumbers(p, q) {
    const res = [];
    for (let i = p; i<= q; i++) {
        if (isModifiedKaprekarNumber(i)) {
            res.push(i)
        }
    }

    res.length > 0 ? console.log(res.join(' ')) : console.log('INVALID RANGE'); 
}

kaprekarNumbers(1, 10000)