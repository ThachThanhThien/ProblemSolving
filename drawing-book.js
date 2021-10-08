// Input
// int n: the number of pages in the book
// int p: the page number to turn to

// Output
// int: the minimum number of pages to turn


function pageCount(n, p) {
    if (n % 2 == 1) n = n - 1;
    return Math.min(Math.floor(p / 2), Math.ceil((n - p) / 2))
}

console.log(pageCount(5, 4))