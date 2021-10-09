// Input
// int steps: the number of steps on the hike
// string path: a string describing the path (U/D)

// Output
// int: the number of valleys traversed


function countingValleys(steps, path) {
    let res = 0;
    let cur = 0;
    let isDown = false;
    path.split('').forEach(s => {
        if (s === 'U') {
            cur++;
            isDown = false;
        } else {
            cur--;
            isDown = true;
        }
        if (isDown == false && cur == 0) res++;

    })

    return res;
}

console.log(countingValleys(8, 'DDDUUUUDUDU'))