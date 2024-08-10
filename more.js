//  recusive count to 10
function recursiveCount(num = 0){
    if(num >= 11){
        return num;
    }
    console.log(num);
    recursiveCount(++num);
}

// recursive search

function recursiveSearch(arr, target){
    if (arr.length === 0){
        return false;
    }

    if (arr[0] === target){
        return true;
    }

    recursiveSearch(arr.slice(1), target);
}

let arr = [3, 4, 8, 9, 12]
let target = 12
let result = recursiveSearch(arr, target)
console.log (result)

// resursive search and count
function recursiveSearchAndCount(arr, target){
    if (arr.length === 0){
        return 0;
    }

    let count = arr[0] === target ? 1 : 0;

    return count + recursiveSearchAndCount(arr.slice(1), target)
}

// let arr = [3, 4, 3, 9, 12, 3]
// let target = 3
// let result = recursiveSearchAndCount(arr, target)
// console.log (result)

// fibonacci

function fibonacci(n){
    if (n < 2){
        return n
    }

    return fibonacci(n-1) + fibonacci(n-2);
}