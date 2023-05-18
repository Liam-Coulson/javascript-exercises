const findTheOldest = function(people) {
    let oldest = people.reduce((currOldest, nextPerson) => {
        currentYear = new Date().getFullYear();
        if (!currOldest.hasOwnProperty("yearOfDeath")){
            currOldestAge = currentYear - currOldest.yearOfBirth;
        } else {
        currOldestAge = currOldest.yearOfDeath - currOldest.yearOfBirth;
        }

        if (!nextPerson.hasOwnProperty("yearOfDeath")){
            nextPersonAge = currentYear - nextPerson.yearOfBirth;
        } else {
            nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        }

        if (nextPersonAge > currOldestAge) {
            return nextPerson;
        } else {
            return currOldest;
        }
    })
    return oldest;
};

const listofpeople = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
