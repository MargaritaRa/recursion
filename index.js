//  count from 1 to 5 using a recursive function

function RecursiveCount(num = 0){
    if (num >= 6){
        return num
    }
    console.log(num)
    RecursiveCount(++num)
}

// Write a recursive function that counts down from a given number n to 1.
function CountDown(num = 5){
    if (num <= 1){
        return num;
    }
    console.log(num);
    CountDown(--num);
}

// Write a recursive function that counts up from a given negative number n to 0
function NegativeCountUp(num = -5){
    if (num >= 0){
        return num
    }
    console.log(num)
    NegativeCountUp(++num)
}

// function NegativeCountUp( num = -5){
//     if (num >= 0){
//         return num;
//     }

//     console.log(num)
//     NegativeCountUp(++num)
// }