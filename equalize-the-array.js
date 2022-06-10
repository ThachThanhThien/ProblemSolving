// Input
// int arr[n]: an array of integers

// Output
// int: the minimum number of deletions required

function equalizeArray(arr) {
    let elementFrequencyObj = {};
    for(let i of arr) {
        if (!elementFrequencyObj[i]) {
            elementFrequencyObj[i] = 0
        }
        elementFrequencyObj[i]++;
    }
    const elementFrequencyArr = Object.values(elementFrequencyObj).sort((a, b) => b - a);
    return arr.length - elementFrequencyArr.shift();
}

console.log(equalizeArray([3,2,1,3,3]))