function hackerlandRadioTransmitters(x, k) {
    x = x.sort((a, b) => a - b);
    
    let res = 0;
    let maxRange = -1;
    let city = {};
    for (let item of x) {
        city[item] = true;
    }

    for (let i = 0; i < x.length; i++) {
        if (x[i] > maxRange) {
            if (city[x[i] + k]) {
                res++;
                maxRange = x[i] + 2 * k;
            }
            if (x[i + 1] <= x[i] + k) {
                res++;
                maxRange = x[i] + 2 * k;
            } else {
                res++;
            }
        }
    }
    return res;
}

console.log(hackerlandRadioTransmitters([2, 3, 5, 14, 15], 2))