const sumAll = function(firstNumber, lastNumber) {

var finalSum = 0;

console.log(finalSum);


if (typeof firstNumber != "number" || typeof lastNumber != "number"){
    return "ERROR";
}

if (firstNumber <0 || lastNumber <0){
    return "ERROR";
}

//Swap the numbers around to deal with the first number being larger than the last number
if (firstNumber > lastNumber){
    firstNumberSwap = lastNumber;
    lastNumberSwap = firstNumber 
}
else{
    firstNumberSwap = firstNumber;
    lastNumberSwap = lastNumber;
}

    for (i = firstNumberSwap; i<=lastNumberSwap; i++){
        finalSum = finalSum + i;
    }

console.log(finalSum);
return finalSum;
};


// Do not edit below this line
module.exports = sumAll;
