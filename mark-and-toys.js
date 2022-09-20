function maximumToys(prices, k) {
    let res = 0;
    let curAmmount = 0;
    prices = prices.sort((a, b) => a - b);
    for(let i = 0; i < prices.length; i++) {
        curAmmount+= prices[i];
        if (curAmmount > k) {
            return res;
        }
        res++;
    }
    return res;
}

console.log(maximumToys([1,2,4,3], 7))