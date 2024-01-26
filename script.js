"use strict"




 
// -----   1  <3



function sumNumbers(...Numbers) {
    let numberSum = 0;
    for (let item of Numbers) {
        numberSum += item;
    }
    
    return numberSum;
    }
    
    
    let resultNumberSum = sumNumbers (10, 50, 6, 7, 8, 11, 6, 3, 9);
    console.log(resultNumberSum);
    
    
    
    
    // -----   2
    
    function userGe(user) {
        let userGe = {
            firstname: 'giorgi', 
            lastname: 'saakadze',
            age: 32,
            isloggedin: true
        }
    
        let userGe1 = userGe.isloggedin === true ? 'giorgi saakadze': 'false'
        return userGe1
    }
    
    let getUserInfo = userGe();
    console.log(getUserInfo);
    
    
    
    
    
    // ------- 3
    
    
    function letsfindMaxNum(numbers) {
        return Math.max(...numbers)
    }
    
    let numArray = [2, 3, 15, 32, 5];
    let maxNum = letsfindMaxNum(numArray);
    console.log(maxNum);
    
    
    
    
    
    // -------  4
    
    function number1 (number) {
        return number % 2 === 0 ? 'number is even': 'number is odd';
    }
    
    let resultNum1 = number1 (9);
    console.log(resultNum1);
    
    
    
    
    
    
    // -------- 5
    
    const array = [1, 2, 3, 4, 5];
    
    const reversedArr = [];
    
    for ( let i = array.length -1; i>=0; i--) {
        const valueIn = array[i]
        reversedArr.push(valueIn)
    }
    console.log(reversedArr);
    
     
    
    
    
    
    // -------- 6
    
    const checkuserAge = userAge2 => (userAge2> 18) ? 'სრულწლოვანი': 'არასრულწლოვანი';
    
    const userAge = 17;
    const resultAge = checkuserAge (userAge);
    console.log(resultAge);