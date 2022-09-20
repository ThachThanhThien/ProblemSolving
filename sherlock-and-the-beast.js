function decentNumber(n) {
    let res = null;

    let n5 = -1;
    let n3 = -1;

    for (let i = Math.floor(n / 3); i >= 0; i--) {
        if ((n - 3 * i) % 5 == 0) {
            n5 = 3 * i;
            n3 = n - n5;
            break;
        }
    }

    if (n5 >=0 && n3 >=0) {
        res = new Array(n5).fill(5).join('') +  new Array(n3).fill(3).join('');
    } else {
        res = -1;
    }
    return res;

}
console.log(decentNumber(15))