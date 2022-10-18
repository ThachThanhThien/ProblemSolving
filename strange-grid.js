function strangeGrid(r, c) {
    // let isEvenRow = (r % 2 === 1);
    // let firstValueOfRow = (Math.ceil(r / 2) - 1) * 10;
    // return firstValueOfRow + (isEvenRow ? (c - 1) * 2 : (c * 2 - 1));
    return ((Math.ceil(r / 2) - 1) * 10) + ((r % 2 === 1) ? (c - 1) * 2 : (c * 2 - 1));
}

let test = [
    [6, 3]
]
for (let item of test) {
    console.log(strangeGrid(...item))
}