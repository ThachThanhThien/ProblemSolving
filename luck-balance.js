function luckBalance(k, contests) {
    let res = 0;
    let importantContest = [];
    for (let contest of contests) {
        if (contest[1] === 1) {
            importantContest.push(contest[0])
        } else {
            res += contest[0];
        }
    }
    if (k < importantContest.length) {
        const dif = importantContest.length - k;
        importantContest = importantContest.sort((a, b) => b - a);
        for (let i = 1; i <= dif; i++) {
            res -= importantContest.pop();
        }
    }
    res += importantContest.reduce((cur, prev) => cur + prev, 0);
    return res;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))