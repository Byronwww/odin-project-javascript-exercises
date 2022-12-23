const palindromes = function (potentialPalindrome) {
    
    let potentialPalindromeLength = potentialPalindrome.length;

    let reversedString = '' 
    //add each letter to an array starting from the last letter and stopping at the first one
    const reversedStringArray = new Array();
    for (i=potentialPalindromeLength; i>=0; i--){
        let characterToAdd = potentialPalindrome.charAt(i);
 
        reversedString += characterToAdd;
    }

    if(reversedString == potentialPalindrome){
        return true;        
    }
    else{
    return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
