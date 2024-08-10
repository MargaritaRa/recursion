// function recursiveSearchAndCount(arr, target) {
//     if (arr.length === 0) {
//       return 0;
//     }
    
//     let count = arr[0] === target ? 1 : 0;
    
//     return count + recursiveSearchAndCount(arr.slice(1), target);
//   }
  
  // Example usage
  let arr = [3, 5, 3, 8, 3, 2];
  let target = 3;
  let result = recursiveSearchAndCount(arr, target);
  console.log(result);  // What will this output?
  

  /**
   * function recursiveSearchAndCount(arr, target) {
   * check if the arry is empty, returning zero means there is no element in th array
    if (arr.length === 0) {
      return 0;
    }
    
    check if the first elemtent is equal to the target
        if equal, count is set to one, if not equal count is set to zero
    let count = arr[0] === target ? 1 : 0;
    
    the count is added and we keep slicing the array to find all the numbers
    return count + recursiveSearchAndCount(arr.slice(1), target);
  }
   */

  function recursiveSearchAndCount(arr, target){
    if (arr.length === 0){
        return 0;
    }

    const count = arr[0] === target ? 1 : 0;

    return count + recursiveSearchAndCount(arr.slice(1), target)
  }