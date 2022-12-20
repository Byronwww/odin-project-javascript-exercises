const repeatString = function(string, num) {   
    let returnedString = "";

    if (num < 0){
        return "ERROR";    
    }
    else{
        for (i=0; i<num; i++){
            returnedString += string;
        }    
        return returnedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
