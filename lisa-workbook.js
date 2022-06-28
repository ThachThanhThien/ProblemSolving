// A problem to be special if its index (within a chapter) is the same as the page

// Input
// int n: the number of chapters
// int k: the maximum number of problems per page
// int arr[n]: the number of problems in each chapter

// Output
// int: the number of special problems in the workbook

function workbook(n, k, arr) {
    let book = {};
    let page = 0;

    for(let item of arr) {
        let neededPage = Math.ceil(item / k);
        for(let i = 1; i <= neededPage; i++) {
            page ++;
            if (!book[page]) {
                book[page] = {};
            }
            book[page]['min'] = k * (i - 1) + 1;
            book[page]['max'] = k * i < item ? k * i : item;
        }
    }
    let res = 0;
    Object.keys(book).forEach(page => {
        if (book[page].min <= parseInt(page)  && parseInt(page) <= book[page].max) {
            res++
        }
    })
    return res;
}

console.log(workbook(10, 5, [3, 8, 15, 11, 14 ,1, 9, 2, 24, 31]))