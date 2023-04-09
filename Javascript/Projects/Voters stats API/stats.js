/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    const newAge = ages.filter(function(age){
            return age >= 18;
    });
    console.log(newAge);
    return newAge.length; 
    }

    
    