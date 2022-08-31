function gridChallenge(grid) {
    grid = grid.map(item => {
        return Array.from(item).sort();
    })
    let res = 'YES';
    for (let i = 0; i < grid[0].length; i++) {
        let temp = [];
        for (let s of grid) {
            temp.push(s[i]);
        }
        if (temp.toString() !== temp.sort().toString()) {
            return 'NO';
        }
    }

    return res;
}

console.log(gridChallenge([
    'acdeb',
    'fjihg',
    'rotsu',
    'lmnkp',
    'wvyxz'
]))