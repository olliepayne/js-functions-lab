// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(...numbers) {
    let largestNumber = 0;
    numbers.forEach(function(currentNumber) {
        if(currentNumber > largestNumber) {
            largestNumber = currentNumber;
        }
    });
    return largestNumber;
};
console.log(`Answer 2: ${maxOfThree(3, 20, 4)}`);


// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(aChar) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.forEach(function(val) {
        if(aChar === val) {
            console.log(`Answer 3: true`);
            return true;
        }
    });
}
isCharAVowel('o');


// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
const sumArray = function(numArr) {
    let sum = 0;
    numArr.forEach(function(val) {
        sum += val;
    });
    return sum;
};
console.log(`Answer 4: ${sumArray([2, 4, 5])}`);


// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
function multiplyArray(numArr) {
    let product = 1;
    numArr.forEach(function(val) {
        product *= val;
    });
    return product;
}
console.log(`Answer 5: ${multiplyArray([2, 4, 5])}`);


// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.



// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".



// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.



// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.