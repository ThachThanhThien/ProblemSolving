// We consider two strings to be anagrams of each other 
// if the first string's letters can be rearranged to form the second string

// Input
// string s1: a string
// string s2: a string

// Output
// int: the minimum number of deletions needed

function makingAnagrams(s1, s2) {
    let fS1 = {};
    let fS2 = {};

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
    fS1 = buildFS(s1);
    fS2 = buildFS(s2);
    
    let deleted = 0;
    for (let item of Object.keys(fS1)) {
        if (!fS2[item]) {
            deleted += fS1[item]
        } else {
            deleted += Math.abs(fS1[item] - fS2[item])
        }
    }
    for (let item of Object.keys(fS2)) {
        if (!fS1[item]) {
            deleted += fS2[item]
        }
    }
    return deleted;
}

console.log(makingAnagrams('cde', 'abc'))