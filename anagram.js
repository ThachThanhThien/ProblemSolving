// Two words are anagrams of one another 
// if their letters can be rearranged to form the other word

// Input
// string s: a string

// Output
// int: the minimum number of characters to change or -1.

function anagram(s) {
    if (s.length % 2 === 1) {
        return -1
    } else {
        let first = s.slice(0, s.length / 2);
        let second = s.slice(s.length / 2);
        
        const buildFS = (s) => {
            let res = {};
            for (let item of Array.from(s)) {
                if (!res[item]) {
                    res[item] = 0;
                }
                res[item]++;
            }
            return res;
        }
        let fS1 = buildFS(first);
        let fS2 = buildFS(second);
        for (let item of Object.keys(fS1)) {
            if (fS2[item]) {
                fS1[item] = fS1[item] > fS2[item] ? fS1[item] - fS2[item] : 0;
            }
        }
        return Object.values(fS1).reduce((prev, cur) => prev + cur, 0);
    }
}

console.log(anagram('abccde'))