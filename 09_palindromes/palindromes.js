const palindromes = function (string) {
    let charArray = string.toLowerCase().replace( /[^a-z]/g, '').split('');
    return charArray.join() === charArray.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
