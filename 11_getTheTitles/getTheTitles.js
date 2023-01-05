const getTheTitles = function(array) {
  result = [];

  array.forEach((element) => {
    result.push(element.title);
  });

  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
