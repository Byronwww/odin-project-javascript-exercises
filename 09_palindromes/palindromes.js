const palindromes = function (potentialPalindrome) {
    
    let potentialPalindromeLength = potentialPalindrome.length;

    let cleanString = '';
    let reversedString = '';

    //this loop cleans the potentialPalidrome but does not reverse it
    for (i = 0; i <= potentialPalindromeLength; i++){
        const nextLetter = potentialPalindrome.charAt(i);
        
        if (nextLetter.match(/[a-zA-Z]/)){            
            console.log("Next Letter: " + nextLetter);
            cleanString += nextLetter;            
            console.log(cleanString);
        }
    }
    
    //This loop reverses the cleanedString and checks if it still matches once reversed  
    for (i = cleanString.length; i >= 0; i--){
        const nextLetter = cleanString.charAt(i);
        
        if (nextLetter.match(/[a-zA-Z]/)){            
            console.log(nextLetter);
            reversedString += nextLetter;            

        }
    }

    let cleanStringLowerCase = cleanString.toLowerCase();
    let reversedStringLowerCase = reversedString.toLowerCase();

    console.log("Clean String (lower case): " + cleanStringLowerCase);
    console.log("Reversed String (lower case): " + reversedStringLowerCase);



    if(reversedStringLowerCase == cleanStringLowerCase){
        return true;        
    }
    else{
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;

