// Input
// string s: the initial string
// string t: the desired string
// int k: the exact number of operations that must be performed

// Output
// string: either Yes or No


function appendAndDelete(s, t, k) {
    let res = '';
    if (k >= s.length + t.length) {
        res = 'Yes';
    } else {
        let sarr = s.split('');
        let tarr = t.split('');
        let end = Math.min(s.length, t.length);
        let index = -1;
        for (let i = 0; i < end; i++) {
            if (sarr[i] !== tarr[i]) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            index = end;
        }
        let need = s.length + t.length - 2 * index;
        if (k === need) {
            res = 'Yes';
        } else if (k < need) {
            res = 'No'
        } else {
            let temp = k - need;
            if (temp % 2 == 0) {
                res = 'Yes';
            } else {
                res = 'No';
            }
        }
    }
    return res;
}

console.log(appendAndDelete('hackerhappy', 'hackerrank', 9))