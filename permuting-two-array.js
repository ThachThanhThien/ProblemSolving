function twoArrays(k, A, B) {
    return A.reduce((prev, cur) => prev + cur, 0) + B.reduce((prev, cur) => prev + cur, 0) >= A.length * k ? 'YES' : 'NO';
}
