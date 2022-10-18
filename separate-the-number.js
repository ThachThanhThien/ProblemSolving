function separateNumbers(s) {
    let mid = Math.floor(s.length / 2);
    let curIndex = 1;
    while (curIndex <= mid) {
        let first = s.slice(0, curIndex);
        let tempFirst = first;
        let tempString = '';
        while (tempString.length < s.length) {
            tempString += tempFirst;
            tempFirst = (BigInt(tempFirst) + BigInt(1)).toString();
        }
        if (tempString === s) {
            return 'YES ' + first
        } else {
            curIndex++;
        }
    }
    return 'NO'
}

let test = [
    '90071992547409929007199254740993',
]
for (let item of test) {
    console.log(separateNumbers(item))
}