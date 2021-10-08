// // Input
// // int grades[n]: the grades before rounding

// // Output
// // int[n]: the grades after rounding as appropriate\

// // Round rules
// // If the difference between the grade and the next multiple of 5 is less than 3, 
// // round grade up to the next multiple of 5.
// // If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
    let res = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            res.push(grades[i])
        } else {
            if (grades[i] % 5 > 2) {
                res.push(Math.floor(((grades[i] + 5) / 5)) * 5);
            } else {
                res.push(grades[i])
            }
        }


    }
    return res;
}

console.log(gradingStudents([73, 67, 38, 33]))