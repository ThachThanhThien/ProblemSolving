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
    // let allPossiableAttack = 0;
    // allPossiableAttack = (n - 1) * 2;
    // if (k > 0) {
    //     for (let i = 1; i <= n; i++) {
    //         if ()
    //     }
    // } else {

    // }
}
console.log(queensAttack(4, 0, 4, 4))
console.log(queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]))