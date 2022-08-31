// Input 
// string topic: a string of binary digits

// Output
// int[2]: the maximum topics and the number of teams that know that many topics


function acmTeam(topic) {
    let results = [];
    let range = topic.length - 1;
    
    for (let i of Array.from({ length: range }, (value, index) => index)) {
        results.push(
            ...Array.from(
                { length: range - i },
                (value, index) => index + 1 + i
            ).reduce((target, compare) => {
                target.push(
                    [...topic[i]].reduce((target, item, valueIndex) => {
                        (!!+item || !!+topic[compare][valueIndex]) && target++;

                        return target;
                    }, 0)
                );

                return target;
            }, [])
        );
    }

    return results
        .sort()
        .reverse()
        .reduce(
            (target, item, index) => {
                !index && (target[0] = item);

                target[0] == item && target[1]++;

                return target;
            },
            [0, 0]
        );
}

console.log(acmTeam(['10101'
    , '11100'
    , '11010'
    , '00101']))
