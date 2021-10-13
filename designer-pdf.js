// Input
// int h[26]: the heights of each letter
// string word: a string


// Output
// int: the size of the highlighted area



function designerPdfViewer(h, word) {
    let res = 0;
    let max = 0;
    word.split('').forEach(w => {
        if (h[w.charCodeAt(0) - 97] > max) {
            max = h[w.charCodeAt(0) - 97]
        }
    })
    res = max * word.split('').length;

    return res;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))