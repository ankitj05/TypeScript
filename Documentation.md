# TypeScript

- superset of JS.
- TS has many more types than what JS provides. 
- TS allows us to define the type to the variables and functions. 
- TS compiles to JS, since browser engine does not support TS.
- TS help in writing cleaner and bug free code.


## Core Types (basics.ts, object_arrays_tuples.ts)
- number -> includes all numbers, integers or floats
- string -> everything text
- boolean -> true or false. No values or statements which are either truthy or falsy
- object -> key value pairs. TS gives us the option to describe the object in much more detailed manner. 
- array -> JS array. TS gives us the option to describe the elements of array. They can be of different types. 
- tupple -> TS specific. Similar to arrays, but tuples have a fixed length.
- enum -> TS specific. Create global identifiers. Constant in nature.
- any -> any kind of value. No specific type.

## Union Types (union_literal.ts)
- TS allows you to assign a variable to multiple types. 
- This is helpful when we want to call the same function but with different logic for different type of variable. 
- Because of this, the function will only accept the inputs of the defined type and otherwise gives error, whereas in JS it would have returned unwanted output.

## Literal Types (union_literal.ts)
- TS allows us to fix the variable value to either one or from a certain number of options (using unions)
- Meaning that if we define a variable type as string, it could be anything. 
- But literal types allows us to define what should be the value of the variable. It is more like a const declaration. 

## Type Aliases (typeAliases.ts)
- When we are defining the types for the variables, it becomes cumbersome to declare the type as union of of 2-3 types. 
- Hence we can create a custom type in different combinations of types which we can later use to declare the type of variables. 
- This new type will become a re-usable type. 

## Function Types (functionTypes.ts)
- Function type is one such type provided by TS. It is not provided by JS. 
- It basically lets you define the type of arguments and return type of the function.
- Also, it helps in creating function expressions, where we assign a function either name or annonymous to a variable, by defining the types of input arguments and return type. 
- It adds a new type called 'void'. It basically means that the function does not return any thing or the return statement is empty. 
- There is an interesting type called 'never'. It basically means that the function will not return anything plus it will break the script. Eg, throwing the error.

## Unknown Type 
- It is basically a stricter version of any. 
- the variable can hold any type of value to it. 
- But when we want to assign this variable to another variable of type string, TS will throw any error stating that the unknown can not be string. 
- To overcome this, we will have to add a check and then assign the variable. 
- This helps because we only want to perform a certain assignment or action when the type of the variable is known to us. 
