// Defining Objects

// Basic - Here TS will automatically infer that name is string and age is number type. TS will create a type of this object as follows.
// person : {
//     name: string;
//     age: number;
// }
// This is the best syntax. 
const person = {
    name: 'Ankit',
    age: 25
}

// If you define the person1 is object type, TS will not care about the key-value pairs of object.
// This is wrong way of definig, since we are just stating that person is of type object, but not giving any 
// inference on the content of the object.
const person1: object ={
    name: "Ankit",
    age: 25
}

// If you want to make sure the key-value pairs. Here we are specifying that the object person2 will 
// exactly contain the 2 keys name and age of string and number type only. Otherwise TS will throw the error.
const person2: {
    name: string;
    age: number;
} = {
    name: "Ankit",
    age: 25
}


// Arrays
// If you hover on hobbies, TS will identify that the array is not any general array but a string[] type.
const hobbies = ["Sports", "Cooking"]
// So if we want to add any new item/element to the array at a later point of time which is not string, it will throw an error. 
// Stating that the array is a string[]. 
hobbies.push(1)

// Also, when i loop though the array, i can use any string function on the item and TS will not mind. 
// Because TS knows that the array is of type string[]
for (let hobby in hobbies){
    console.log(hobby.toUpperCase())
}

// We can also define the array as following.
const array1: string[] = ["Cooking"]

// If we want to have a mixed array, then there are 2 ways.
const array2: any[] =["Cooking", 19]
// here we are giving up the support that TS is providing. 

const array3: (string | number)[] = ["Cooking", 19]
// here there is no issue. We are stating that the array can contain either string or number. 


// Tuple - Fixed length array. 
// this is helpful if we know that the elements in the array are fixed and also, that the element on a certain 
// position will be of a perticular type. 
var role1 : [number, string] = [2, 'admin']
// here we defined that the tuple role has 2 items. first is of type number and second of type string.
// if we try to change the element on the position 1 to a number, it should throw an error.
role1[1] = 0
 
// if we try to add more elements, then also the error will come. 
role1 = [23, "admin", "read-only"]


// enums
enum Role {ADMIN, READ_ONLY, WRITE_ONLY}
// enums are helpful when we want to have a global identifies, which refers to a certain number or value.
