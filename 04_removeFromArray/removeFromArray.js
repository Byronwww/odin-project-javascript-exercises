//This sends an array (items) plus an array of arguments (itemsToRemove)
//which need to be filtered out of the items array
const removeFromArray = function(items, itemsToRemove) {


// This is the function that actually does the filtering
// I HAVE PROVEN THIS WORKS WITH A HARDCODED SINGLE ITEM REMOVED FROM THE ARRAY 
// I NOW NEED TO FIGURE OUT HOW TO MAKE itemsToRemove INTO A REST PARAMETER
//AND THEN GO THROUGH EACH VALUE IN THE itemsToRemove REST PARAMETER AND REMOVE THAT FROM THE LIST

function filterItems(filterThis){
    console.log("Items: "+ items);
    console.log("Items to Remove: "+ itemsToRemove);
    
    return filterThis !== itemsToRemove; 
}

//This returns the filtered array by first calling a function called filterItems 
//filterItems is where the filtering actually happens
return items.filter(filterItems)
};



// Do not edit below this line
module.exports = removeFromArray;



