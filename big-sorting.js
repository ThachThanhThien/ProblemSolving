// Input
// string unsorted[n]: an unsorted array of integers as strings

// Output
// string[n]: the array sorted in numerical order

function bigSorting(unsorted) {
    // let bigUnsorted = [];
    // for (let num of unsorted) {
    //     bigUnsorted.push(BigInt(num))
    // };
    // bigUnsorted.sort((a, b) => {
    //     if (a > b) {
    //         return 1;
    //     } else if (a < b) {
    //         return -1;
    //     } else {
    //         return 0
    //     }
    // });
    // bigUnsorted = bigUnsorted.map(num => num.toString());
    // return bigUnsorted;
    return unsorted.sort((a, b) => {
        if (a.length == b.length) {
            return a > b ? 1 : -1;
        }
        return a.length - b.length;
    });
}

console.log(bigSorting([31415926535897932384626433832795
    , 31415926535897932384626433832796,
    31415926535897932384626433832797,
    31415926535897932384626433832798]))