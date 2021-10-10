// Input
// x: cat A's location
// y: cat B's location
// z: mouse C's location

// Output
// string: Either 'Cat A', 'Cat B', or 'Mouse C'

function catAndMouse(x, y, z) {
    if (Math.abs(x - z) < Math.abs(y - z))
        return 'Cat A'
    else if (Math.abs(x - z) > Math.abs(y - z))
        return 'Cat B'
    else
        return 'Mouse C'
}