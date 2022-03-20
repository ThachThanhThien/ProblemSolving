// Input
// d1, m1, y1: returned date day, month and year, each an integer
// d2, m2, y2: due date day, month and year, each an integer

// Output
// int: the amount of the fine or 0 if there is none

function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    if (y1 > y2) {
        fine = 10000;
    } else if (y1 === y2 && m1 > m2) {
        fine = 500 * (m1 - m2);
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        fine = 15 * (d1 - d2);
    }

    return fine;
}
