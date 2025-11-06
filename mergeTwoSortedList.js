var mergeTwoLists = function(list1, list2) {
    const merge = [...list1, ...list2].sort((a, b)=> a - b);
    
    console.log("list",merge)
    
};
mergeTwoLists([], [])