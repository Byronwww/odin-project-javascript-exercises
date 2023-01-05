const caesar = function(string, shift) {
  const stringLength = string.length;

  let fullStringToReturn = '';

  for (i = 0; i<stringLength; i++) {
    const currentChar = string.charAt(i);
    console.log('Current Character: ' + currentChar);


    // A-Z charcode 65 - 90
    // a-z charcode 97 - 122

    let charCode = currentChar.charCodeAt(0);
    console.log('Charcode at this location:' + charCode);

    if (charCode >= 64 && charCode <=90) {
      if (charCode + shift >= 90) {
        charCode = (charCode - 90) + 64;
      }
      const incrementedCharCode = charCode + shift;
      console.log('Incremented Char Code: ' + incrementedCharCode);

      incrementedCharCodeBackToString =
      String.fromCharCode(incrementedCharCode);

      console.log('Incremented Character as String: ' +
      incrementedCharCodeBackToString);

      fullStringToReturn += incrementedCharCodeBackToString;
    } else if (charCode >= 97 && charCode <=122) {
      if (charCode + shift >= 122) {
        charCode = (charCode - 122) + 97;
      }
      const incrementedCharCode = charCode + shift;
      console.log('Incremented Char Code: ' + incrementedCharCode);

      incrementedCharCodeBackToString =
      String.fromCharCode(incrementedCharCode);

      console.log('Incremented Character as String: ' +
      incrementedCharCodeBackToString);

      fullStringToReturn += incrementedCharCodeBackToString;
    } else {
      fullStringToReturn += currentChar;
    }
  }
  console.log('Full String:' + fullStringToReturn);
  return fullStringToReturn;
};

// Do not edit below this line
module.exports = caesar;


//
