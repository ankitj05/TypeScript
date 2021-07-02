"use strict";
// here if you check we want to combine the inputs and return the combined value.
// In case of JS we can have any type of input, since we do not define the type. 
// To overcome this, we will have to add conditions within the function. 
// But with TS we can define that we want the input variables to be either number or string. 
function combine(input1, input2) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumber = combine(10, 40);
console.log(combineNumber);
var combineText = combine('Hello ', 'World');
console.log(combineText);
// Literal Types
// Here when you check the input convertedResult, it contains only 2 values - 'as-text' or 'as-number'
// This means that the value of convertedResult will have to either of these 2. 
// TS will give an error if the value does not match when writing our code.
function combine1(input1, input2, convertedResult) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (convertedResult === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineNumber1 = combine1(10, 40, 'as-number');
console.log(combineNumber);
var combineText1 = combine1('Hello ', 'World', 'as-text');
console.log(combineText);
var combineTextNumber = combine1(45, 21, 'as-text');
console.log(combineTextNumber);
