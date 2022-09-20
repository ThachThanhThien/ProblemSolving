
function toys(w) {
    w = w.sort((a, b) => a - b);
    let res = 1;
    let firstToy = w[0];
    for (let i = 1; i < w.length; i++) {
        if (w[i] <= firstToy + 4) {

        } else {
            res++;
            firstToy = w[i];
        }
    }
    return res;
}

console.log(toys([1, 2, 3, 21, 7, 12, 14, 25]));