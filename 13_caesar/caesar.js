const caesar = function(string, shift) {
  const stringLength = string.length;

  let fullStringToReturn = '';
  if (shift >= 0) {
    for (i = 0; i < stringLength; i++) {
      const currentChar = string.charAt(i);
      console.log('Current Character: ' + currentChar);
      console.log('i: ' + i);

      const charCode = currentChar.charCodeAt(0);
      console.log('Charcode at this location:' + charCode);
      if (charCode >= 64 && charCode <=90) { // A-Z charcode 65 - 90
        let incrementedCharCode = charCode;
        for (y = 0; y < shift; y++) {
          incrementedCharCode++;
          console.log('Incremented Character Code: ' + incrementedCharCode);
          if (incrementedCharCode > 90) {
            incrementedCharCode = 65;
          }
        }
        incrementedCharCodeBackToString =
      String.fromCharCode(incrementedCharCode);

        console.log('Incremented Character as String: ' +
      incrementedCharCodeBackToString);

        fullStringToReturn += incrementedCharCodeBackToString;
      } else if (charCode >= 96 && charCode <=122) { // a-z charcode 97 - 122
        let incrementedCharCode = charCode;
        for (x = 0; x < shift; x++) {
          incrementedCharCode++;
          console.log('Incremented Character Code: ' + incrementedCharCode);
          if (incrementedCharCode > 122) {
            incrementedCharCode = 97;
          }
        }
        incrementedCharCodeBackToString =
      String.fromCharCode(incrementedCharCode);

        console.log('Incremented Character as String: ' +
      incrementedCharCodeBackToString);

        fullStringToReturn += incrementedCharCodeBackToString;
      } else { // deals with non alpha characters
        console.log('Non-Alpha');
        fullStringToReturn += currentChar;
      }
    }
    console.log('Full String:' + fullStringToReturn);
    return fullStringToReturn;
  }
  if (shift < 0) {
    // handle negative shift here
    for (i = 0; i < stringLength; i++) {
      const currentChar = string.charAt(i);
      const shiftAbsolute = Math.abs(shift);
      console.log('Shift Absolut: ' + shiftAbsolute);
      console.log('Current Character: ' + currentChar);
      console.log('i: ' + i);

      const charCode = currentChar.charCodeAt(0);
      console.log('Charcode at this location:' + charCode);
      if (charCode >= 64 && charCode <=90) { // A-Z charcode 65 - 90
        let decrementedCharCode = charCode;
        for (y = shiftAbsolute; y > 0; y--) {
          decrementedCharCode--;
          console.log('Decremented Character Code: ' + decrementedCharCode);
          if (decrementedCharCode < 65) {
            decrementedCharCode = 90;
          }
        }
        decrementedCharCodeBackToString =
          String.fromCharCode(decrementedCharCode);

        console.log('Decremented Character as String: ' +
        decrementedCharCodeBackToString);

        fullStringToReturn += decrementedCharCodeBackToString;
      } else if (charCode >= 96 && charCode <=122) { // a-z charcode 97 - 122
        let decrementedCharCode = charCode;
        for (x = shiftAbsolute; x > 0; x--) {
          decrementedCharCode--;
          console.log('Decremented Character Code: ' + decrementedCharCode);
          if (decrementedCharCode < 97) {
            decrementedCharCode = 122;
          }
        }
        decrementedCharCodeBackToString =
          String.fromCharCode(decrementedCharCode);

        console.log('Decremented Character as String: ' +
        decrementedCharCodeBackToString);

        fullStringToReturn += decrementedCharCodeBackToString;
      } else { // deals with non alpha characters
        console.log('Non-Alpha');
        fullStringToReturn += currentChar;
      }
    }
    console.log('Full String:' + fullStringToReturn);
    return fullStringToReturn;
  }
};

// Do not edit below this line
module.exports = caesar;
