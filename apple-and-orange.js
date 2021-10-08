// Input:
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

//Output:
// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numApple = 0;
    let numOrrage = 0;

    apples.forEach(ap => {
        if (a + ap >= s && a + ap <= t) numApple++;
    });

    oranges.forEach(or => {
        if (b + or <= t && b + or >= s) numOrrage++;
    })

    console.log(numApple + '\n' + numOrrage);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])