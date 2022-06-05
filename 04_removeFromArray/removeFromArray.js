const removeFromArray = function(array, values) {
    listToRemove = [...arguments].slice(1)
    
    return array.filter(x=>!listToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
