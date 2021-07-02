// This is the usual function declaration.
function add(n1, n2) {
    return n1+n2
}

//we can define the input type like this.
function add1(n1: number, n2: number){
    return n1+n2
}

// we can define the return type of the function like this.
function add2(n1: number, n2: number): number{
    return n1+n2
}

// we can assign a function to a variable
let sum;
sum = add
console.log(sum(8,8))

// there is a issue above. Sum can be anything. So when we call sum, it might give error. 
sum = 10

// what we can do is that we can define the type of sum.
let sum1 : Function
sum1 = add2

// when we try to assign a number or string to sum1, it will throw an error. 
sum1 = 10;

// but there is one more problem.
sum1(10)

// above it does not throw any error right now, but it will because the function add2 expects 2 arguments,
// but recieves one.
// We can define the content of sum1.
// We are also defining the type of the return.
let sum2 : (n1: number, n2: number) => number

// now sum2 will accept an assignment when the content of that will satisfy the above condition.
sum2 = add2
sum2(1)
sum2(18,12)

// void type
function hi(n1){
    console.log(n1)
}

// this does not return anything. So the type of the function will be undefined. but we can not assign the 
// type of function return as undefined. if there is no return then we will have to assign the return type as void.
function hi2(n1) : void{
    console.log(n1)
}

// never type
function generateError(message: string, code: number) {
    throw {message, errorCode: code}
}


