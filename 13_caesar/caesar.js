const caesar = function(string, shift) {
  const stringLength = string.length;

  let fullStringToReturn = '';

  for (i = 0; i<stringLength; i++) {
    const currentChar = string.charAt(i);
    console.log('Current Character: ' + currentChar);
    const charCode = currentChar.charCodeAt(0);
    console.log('Charcode at this location:' + charCode);
    const incrementedCharCode = charCode + shift;
    console.log('Incremented Char Code: ' + incrementedCharCode);

    incrementedCharCodeBackToString = String.fromCharCode(incrementedCharCode);

    console.log('Incremented Character as String: ' +
    incrementedCharCodeBackToString);

    fullStringToReturn += incrementedCharCodeBackToString;
  }
  console.log('Full String:' + fullStringToReturn);
  return fullStringToReturn;
};

// Do not edit below this line
module.exports = caesar;
