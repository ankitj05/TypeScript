// if you check below we have defined the type of input1 and input2 as number | string.
// Now imagine if we have multiple places in our code where the type is same.
// We can use type aliases. 

//function combine(input1: (number | string), input2: (number | string)){
type NumString = number|string
function combine(input1: NumString, input2: NumString){

    let result;
    if(typeof input1 == 'number' && typeof input2 == 'number'){
        result = input1 + input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineNumber = combine(10, 40)
console.log(combineNumber)

const combineText = combine('Hello ', 'World')
console.log(combineText)