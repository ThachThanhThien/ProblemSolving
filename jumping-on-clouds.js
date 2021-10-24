// Input
// int c[n]: the cloud types along the path
//     c[i] = 0 then cloud i is a cumulus cloud.
//     c[i] = 1 then cloud i is a thunderhead.
// int k: the length of one jump

// Output
// int: the energy level remaining.

function jumpingOnClouds(c, k) {
    let cloud = [];
    let res = 100;
    if (c.length % k == 0) {
        cloud = [...c];
    } else {
        for (let i = 0; i < k; i++) {
            cloud = cloud.concat([...c]);
        }
    }
    console.log(cloud);
    for (let i = 0; i < cloud.length; i += k) {
        if (cloud[i] == 1) res -= 3;
        else res -= 1;
    }
    return res;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 3))