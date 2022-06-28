// A cell of the map a cavity if and only if this cell is not on the border of the map 
// and each cell adjacent to it has strictly smaller depth. 
// Two cells are adjacent if they have a common side, or edge.

// Input
// string grid[n]: each string represents a row of the grid

// Output
// string{n}: the modified grid

function cavityMap(grid) {
    grid = grid.map(item => Array.from(item))
    for (let i = 1; i < grid.length - 1; i++) {
        let cur = grid[i];
        let prev = grid[i - 1];
        let next = grid[i + 1];
        for (let j = 1; j < cur.length - 1; j++) {
            if (cur[j - 1] !== 'X' && cur[j + 1] !== 'X' && prev[j] !== 'X' && next[j] !== 'X' &&
            cur[j - 1] < cur[j] && cur[j + 1] < cur[j] && prev[j] < cur[j] && next[j] < cur[j]) {
                cur[j] = 'X'
            }
        }
    }
    grid = grid.map(item => item = item.join(''))
    return grid;
}

console.log(cavityMap(['1112', '1912', '1892', '1234']))