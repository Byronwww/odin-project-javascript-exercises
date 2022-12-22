//This sends an array (items) plus an array of arguments (itemsToRemove)
//which need to be filtered out of the items array
const removeFromArray = function(items, ...itemsToRemove) {


//This is the function that actually does the filtering
//I need to check a single value being passed in by the filter method 
//comparing it against each value in the itemsToRemove rest parameter (which is essentially an array)

function filterItems(item){    

    for (i = 0; i <= itemsToRemove.length; i++) {
        if (item === itemsToRemove[i]) return false    
    }    
    
    return true;  
    }    


//This returns the filtered array by first calling a function called filterItems 
//filterItems is where the filtering actually happens

//here's how the filter method works. For each item in your items, 
//the filter method will call your function (filterItems in this case), 
//and if your function returns true, it will keep the item inside the array. 
//But, if your function returns false, it will remove the item from your array.
//*Thanks to Rachel Banana on Discord for explaining how the filter works ^
return items.filter(filterItems)
};


// Do not edit below this line
module.exports = removeFromArray;

