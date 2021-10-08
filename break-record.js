// Input
// int scores[n]: points scored per game

// Output
// int[2]: An array with the numbers of times she broke her records. 
// Index 0 is for breaking most points records, and index 1 is for breaking least points records.

function breakingRecords(scores) {
    let res = [0, 0];
    let min = scores[0];
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            res[0]++;
        }
        if (scores[i] < min) {
            min = scores[i];
            res[1]++;
        }
    }
    return res;
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))