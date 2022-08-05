// A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

// Input
// string arr[n]: an array of strings

// Output
// int: the number of gemstones found

function gemstones(arr) {
    let res = 0;
    let testString = Array.from(new Set(arr[0]));
    for (let char of testString) {
        let isExistInAll = true;
        for (let i = 1; i < arr.length; i++) {
            if (Array.from(arr[i]).indexOf(char) < 0) {
                isExistInAll = false;
                break;
            }
        }
        res = isExistInAll ? res + 1 : res;
    }
    return res;
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']))