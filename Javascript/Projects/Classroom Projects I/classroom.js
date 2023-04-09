/** @param {number[]} grades */
export function getNumberOfGrades(grades) {

    return grades.length;
    // TODO: return the number of grades

}

/** @param {number[]} grades */
export function getSumGrades(grades) {
let num = 0;
grades.forEach(function(grade){
return num += Number.parseInt(grade);
});
return num; 
    // TODO: return the sum of all the grades
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
let sum = 0;
grades.forEach(function(grade){
return sum += Number.parseInt(grade);     
});
return sum / grades.length;
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)

}

/** @param {number[]} grades */
export function getPassingGrades(grades) {

return grades.filter(function(grade){
    return grade >= 10;
});
    // TODO: return all passing grades (10 and above)

}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    return grades.filter(function(grade){
        return grade < 10; 
    });
    // TODO: return all failing grades (9 and below)

}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
return grades.map(function(grade){
    if(grade + 1 > 20 ){
        return 20;
    }
    return grade + 1;
    
});
    // TODO: return all the grades raised by 1 (no grade should exceed 20)

}
