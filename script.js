// const myName = "Leila Paria";
// console.log(myName);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => console.log(input));
// let fName = "Lily"
// let age = 30;
// let isFemale = true;
// //fName= 24; not possible because types are not the same.
// console.log(fName);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
// console.log(circ("5")); Not possible because type of argument are not number.
//However, in JS we get NaN,  not error before compiling, which is not good.
//Array
var names = ["Leila", "Paria", "Pouyan"];
//names= "Ashkan"; (X) Type 'string' is not assignable to type 'string[]'.
//names[2]=11;  Type 'number' is not assignable to type 'string'.
//names.push(10); Argument of type 'number' is not assignable to parameter of type 'string'.
names.push("Arman");
names[3] = "11";
console.log(names);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//nums="Paria" Type 'string' is not assignable to type 'number[]'.
//nums=12; Type 'number' is not assignable to type 'number[]'.
//nums.push("12"); (X) Argument of type 'string' is not assignable to parameter of type 'number'.
nums.push(12); //IS OK.
//MIXED types in Array
var mixedArray = ["Paria", 2, 3, 4, 5, "Leila"];
// mixedArray = 11; (X)
mixedArray = []; //is OK.
// mixedArray.push(true); (X) Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
mixedArray.push(11); //is OK.
mixedArray.push("Lily"); //is OK.
console.log(mixedArray);
//Object
var person = {
    name: "John",
    age: 30,
    isMale: true,
};
//person = [] Type 'undefined[]' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person = {}; Type '{}' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person.name = 12; (X)
person = {
    name: "Joe",
    age: 35,
    isMale: true,
}; //is OK.
person.name = "James"; //is OK.
//person.phone = 35; Property 'phone' does not exist on 
//type '{ name: string; age: number; isMale: boolean; }'. However in JS it is OK.
console.log(person);
//So in objects
//Structure including the keys should be exactly the same.
//Also data types of the values should be the same types.
//Also we get error if we point to any keys that are not in the object.
//However in JS we don't get any error and if console.log it we get undefined, which is not good 
//Explicit Types
//If we want to only declare a variable without assigning it any value
//then we can write its type after: So we cant assign it to a value with any other type later.
var firstName;
//firstName=12 (X) Type 'number' is not assignable to type 'string'.
firstName = "Leila"; //is OK.
var age;
var isFemale;
//array
//let numArray:number[];
//numArray[0]=1; //is OK here but not in the browser.
// numArray[0]="1" (X)
//We cant use .push() because it is like pushing to nothing, even though
//we don't get error here but we get an error in the browser.
//the way to get around of this is, 
var numArray = [];
numArray[0] = 1; //is OK here and in the browser.
// numArray[0]="1" (X)
//Note that we can only push numbers(with type number) to the array.
numArray.push(26);
console.log(numArray);
//union types
//arrays
var mixedArr = [];
mixedArr.push(12);
mixedArr.push(true);
console.log(mixedArr);
//variables
var uId;
//uId=false (X) Type 'boolean' is not assignable to type 'string | number'.
uId = 15;
console.log(uId); //is Ok.
