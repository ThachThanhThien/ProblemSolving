// Input
// int a[n]: an array of integers

// Output
// int: the minimum distance found or -1 if there are no matching elements

function minimumDistances(a) {
    let res = -1
    let numberIndex = {};
    for(let i = 0; i < a.length; i++) {
        if(!numberIndex[a[i]]) {
            numberIndex[a[i]] = []
        }
        numberIndex[a[i]].push(i)
    }
    console.log(numberIndex);

    let distanceArr = [];
    Object.keys(numberIndex).forEach(key => {
        if (numberIndex[key].length >= 2) {
            for (let i = 1; i < numberIndex[key].length; i++) {
                distanceArr.push(numberIndex[key][i] - numberIndex[key][i - 1]);
            }
        }
    })
    if (distanceArr.length < 1) {

    } else {
        distanceArr = distanceArr.sort((a, b) => a - b);
        console.log(distanceArr);
        res = distanceArr[0]
    }

    return res;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))
