// Input
// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle

// Output
// int: the minimum number of doses required, always  or more

function hurdleRace(k, height) {
    let maxDose = 0;
    height.forEach(h => {
        if (h - k > maxDose)
            maxDose = h - k;
    })
    return maxDose
}