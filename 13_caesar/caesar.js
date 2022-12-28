const caesar = function(string, shift) {
    let stringCode = string.charCodeAt(0);
    console.log(stringCode);
    let incrementedStringCode = stringCode + shift;
    console.log(incrementedStringCode);
    incrementedStringCodeToString = String.fromCharCode(incrementedStringCode);
    return incrementedStringCodeToString;
};

// Do not edit below this line
module.exports = caesar;
