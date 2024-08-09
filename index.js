//  count from 1 to 5 using a recursive function

function RecursiveCount(num = 0){
    if (num >= 6){
        return num
    }
    console.log(num)
    RecursiveCount(++num)
}