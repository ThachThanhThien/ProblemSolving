// Input
// int n: the number of cities
// int c[m]: the indices of cities with a space station

// Output
// int: the maximum distance any city is from a space station

function flatlandSpaceStations(n, c) {
    if (n === c.length) {
        return 0;
    }
    c.sort((a, b) => a - b);
    let maxDistance = c[0];

    for (let i = 1; i < c.length; i++) {
        let distance = Math.floor((c[i] - c[i-1]) / 2)
        if (distance > maxDistance) {
            maxDistance = distance;
        }
    }

    let lastDistance = n - 1 - c[c.length - 1];
    if (lastDistance > maxDistance) {
        maxDistance = lastDistance
    }
    return maxDistance;
}
console.log(flatlandSpaceStations(10, [0]))