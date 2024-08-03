const findTheOldest = function(people) {
    people.forEach(person => {
        if(! person.yearOfDeath){
            let currentTime = new Date()

            person.age = currentTime.getFullYear() - person.yearOfBirth
        }
        else{
            person.age = person.yearOfDeath - person.yearOfBirth
        }
    });
    people.sort((a, b) => b.age - a.age )
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
