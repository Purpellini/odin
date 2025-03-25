/* const removeFromArray = function(array1) {
    let array = Array.from(array1)
    array.splice(2, 1); // Usuwa 1 element od indeksu 2
    return array
};

removeFromArray([1, 2, 3, 4]);

// Do not edit below this line
module.exports = removeFromArray; */


const removeFromArray = function(array1,numberToRemove) {
    return array1.filter(coś => coś !== numberToRemove )
};

removeFromArray([1, 2, 3, 4],3);

// Do not edit below this line
module.exports = removeFromArray;