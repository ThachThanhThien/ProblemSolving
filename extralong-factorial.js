function extraLongFactorials(n) {
    let res = BigInt(1);
    for (let i = 2; i <= n; i++) {
        res = res * BigInt(i)
    }
    console.log(res.toString());
}