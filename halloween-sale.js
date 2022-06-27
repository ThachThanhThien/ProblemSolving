// Input
// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget

// Output
// int: the number of games you can buy

function howManyGames(p, d, m, s) {
    let res = 0;
    let totalCost = p;
    while (totalCost <= s) {
        res++;
        p = p - d > m ? p-d : m;
        totalCost += p;
    }
    return res;
}
console.log(howManyGames(20, 3, 6, 80))