const reverseString = function(stringToReverse) {
    let StringToReverseLength = stringToReverse.length;

    let reversedString = '' 
    //add each letter to an array starting from the last letter and stopping at the first one
    const reversedStringArray = new Array();
    for (i=StringToReverseLength; i>=0; i--){
        let characterToAdd = stringToReverse.charAt(i);
 
        reversedString += characterToAdd;
    }
    return reversedString;
};

//Based on the readme text, I think the exercise expected it to be solved by splitting it into an array 
//and then using a reverse sort on the array but I prefer this method of just reading the string backwards

// Do not edit below this line
module.exports = reverseString;
