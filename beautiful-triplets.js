// Input
// int d: the value to match
// int arr[n]: the sequence, sorted ascending

// Output
// int: the number of beautiful triplets


function beautifulTriplets(d, arr) {
    let elementFreq = {};

    for (let item of arr) {
        if (!elementFreq[item]) {
            elementFreq[item] = 0;
        }
        elementFreq[item]++;
    }

    let res = 0;

    Object.keys(elementFreq).forEach(key => {
        if (elementFreq[+key] && elementFreq[+key + d] && elementFreq[+key + 2 * d]) {
            res += (elementFreq[+key] * elementFreq[+key + d] * elementFreq[+key + 2 * d])
        }
    })
    return res;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))