// Input 
// - int n: the number of rows and columns in the board
// - int k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of 2 integers, 
//                        the row and column of an obstacle
// Output
// - int: the number of squares the queen can attack

function queensAttack(n, k, r_q, c_q, obstacles) {
    // let allPosibleCell = {};
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j <=n ; j++) {
    //         if ((i === r_q || j === c_q || i == j + r_q - c_q || i == r_q + c_q - j) && (i !== r_q || j !== c_q)) {
    //             allPosibleCell[i] = allPosibleCell[i] ? [...allPosibleCell[i], j] : [j];
    //         }
    //     }
    // }
    
    // let res = 0;
    // Object.keys(allPosibleCell).forEach(key => {
    //     res += allPosibleCell[key].length;
    // })
    // return res;

    // y = c_q; x = r_q; y = x + r_q - c_q; y = r_q + c_q - x

    let left = c_q - 1;
    let right = n - c_q;
    let above = n - r_q;
    let below = r_q - 1;
    let aboveLeft = Math.min(above, left);
    let aboveRight = Math.min(above, right);
    let belowLeft = Math.min(below, left);
    let belowRight = Math.min(below, right);

    for (let obstacle of obstacles) {
        const r_o = obstacle[0];
        const c_o = obstacle[1];

        if (r_o === r_q) {
            if (c_o < c_q) {
                left = Math.min(left, c_q - c_o - 1)
            } else {
                right = Math.min(right, c_o - c_q - 1);
            }
        } else if (c_o === c_q) {
            if (r_o < r_q) {
                below = Math.min(below, r_q - r_o - 1);
            } else {
                above = Math.min(above, r_o - r_q - 1);
            }
        } else if (r_q - c_q === r_o - c_o) {
            if (c_o < c_q) {
                belowLeft = Math.min(belowLeft, c_q - c_o - 1)
            } else {
                aboveRight = Math.min(aboveRight, c_o - c_q - 1);
            }
        } else if (r_q + c_q === r_o + c_o) {
            if (c_o < c_q) {
                aboveLeft = Math.min(aboveLeft, c_q - c_o - 1) 
            } else {
                belowRight = Math.min(belowRight, c_o - c_q - 1);
            }
        }
    }
    return left + right + below + above + aboveLeft + aboveRight + belowLeft + belowRight;
}
console.log(queensAttack(4, 0, 4, 4))
console.log(queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]))