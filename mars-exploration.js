// Input
// string s: the string as received on Earth


// Output
// int: the number of letters changed during transmission

function marsExploration(s) {
    let res = 0;
    s = s.match(/.{1,3}/g)
    for (let item of s) {
        item.split('').forEach((char, index) => {
            if (char !== 'SOS'.charAt(index)) {
                res++;
            }
        })
    }
    return res;
}

console.log(marsExploration('SOSSPSSQSSOR'))