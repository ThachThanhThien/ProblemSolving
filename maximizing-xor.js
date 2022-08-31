function maximizingXor(l, r) {
    let res = 0;

    for (let i = l; i < r; i++) {
        for (let j = i + 1; j <= r; j++) {
            res = (i ^ j) > res ? (i ^ j) : res;
        }
    }

    return res;
}

console.log(maximizingXor(10, 15)); 