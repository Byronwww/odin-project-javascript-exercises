const findTheOldest = function(input) {



const date = new Date();
let year = date.getFullYear();
console.log("Current Year: " + year);

let previousAge = 0;
let oldestPerson = "";
let currentAge = "";

for (i = 0 ; i < input.length; i++){
    console.log(input[i]);

    currentAge = input[i].yearOfDeath - input[i].yearOfBirth;
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
