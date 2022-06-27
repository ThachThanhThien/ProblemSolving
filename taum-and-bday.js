// Input 
// int b: the number of black gifts
// int w: the number of white gifts
// int bc: the cost of a black gift
// int wc: the cost of a white gift
// int z: the cost to convert one color gift to the other color

// Output
// int: the minimum cost to purchase the gifts

function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    bc = BigInt(bc);
    w = BigInt(w);
    wc = BigInt(wc);
    z = BigInt(z);
    if (bc + z <= wc) {
        wc = bc + z;
    }

    if (wc + z <= bc) {
        bc = wc + z;
    }
    return (b*bc + w*wc).toString();
}

console.log(taumBday(736418699, 754161925,
    912285746, 841360803 ,736841333))