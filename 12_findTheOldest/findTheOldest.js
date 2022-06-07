const age = person => ("yearOfDeath" in person ? person.yearOfDeath : (new Date()).getFullYear()) - person.yearOfBirth;



const findTheOldest = people => people.reduce((oldest, next) => age(oldest) > age(next) ? oldest : next);

// Do not edit below this line
module.exports = findTheOldest;
