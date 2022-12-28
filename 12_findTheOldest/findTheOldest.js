const findTheOldest = function(input) {



const date = new Date();
let currentYear = date.getFullYear();
console.log("Current Year: " + currentYear);

let previousAge = 0;
let oldestPerson = "";
let currentAge = "";
let deathYear = 0;

for (i = 0 ; i < input.length; i++){
    console.log(input[i]);

    if (input[i].yearOfDeath > 0){
        deathYear = input[i].yearOfDeath
    }

    else{
        deathYear = currentYear;
    }

    currentAge = deathYear - input[i].yearOfBirth;
    currentAge = Number(currentAge);
    console.log("Current Age: " + currentAge);
    console.log("Previous Age: " + previousAge);
        
        
    if (currentAge > previousAge){
        previousAge = currentAge;
        oldestPerson = input[i];
    } 
}
console.log("This is the oldest person:");  
console.log(oldestPerson);   
return oldestPerson;

//console.log(input[2].name);
}


// Do not edit below this line
module.exports = findTheOldest;
