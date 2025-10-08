//write your code here
const findMax = (numbers) =>{
    let firstNum = numbers[0]
    for (let i = 0; i <= numbers.length; i++ ){
       if (numbers[i]  > firstNum){
        firstNum = numbers[i]
       }
    }
return firstNum
}

console.log(findMax([3, 7, 2, 9, 5])); // ➜ 9
console.log(findMax([-1, -5, -3]));

// Write a `findMax` function that takes an **array of numbers** as input and returns the **largest number** in that array.