function minimumAbsoluteDifference(arr) {
    let min = Math.abs(arr[0] - arr[1]);
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        let dif = Math.abs(arr[i] - arr[i+1]);
        if (min > dif) {
            min = dif;
        }
    }
    return min;
}