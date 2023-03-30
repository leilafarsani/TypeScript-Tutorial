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

const circ= (diameter:number)=>{
    return diameter * Math.PI;
}   
console.log(circ(5));
// console.log(circ("5")); Not possible because type of argument are not number.
//However, in JS we get NaN,  not error before compiling, which is not good.
//Array
let names =["Leila","Paria","Pouyan"];
//names= "Ashkan"; (X) Type 'string' is not assignable to type 'string[]'.
//names[2]=11;  Type 'number' is not assignable to type 'string'.
//names.push(10); Argument of type 'number' is not assignable to parameter of type 'string'.
names.push("Arman");
names[3]="11";
console.log(names);

let nums=[1,2,3,4,5,6,7,8,9];
//nums="Paria" Type 'string' is not assignable to type 'number[]'.
//nums=12; Type 'number' is not assignable to type 'number[]'.
//nums.push("12"); (X) Argument of type 'string' is not assignable to parameter of type 'number'.
nums.push(12); //IS OK.

//MIXED types in Array
let mixedArray = ["Paria", 2, 3, 4, 5, "Leila"];
// mixedArray = 11; (X)
 mixedArray =[]; //is OK.
// mixedArray.push(true); (X) Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
mixedArray.push(11); //is OK.
mixedArray.push("Lily"); //is OK.
console.log(mixedArray);

//Object

let person ={
    name : "John",
    age : 30,
    isMale : true,
}
//person = [] Type 'undefined[]' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person = {}; Type '{}' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person.name = 12; (X)
person = {
  name: "Joe",
  age: 35,
  isMale: true,
}; //is OK.
person.name = "James" //is OK.
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

let firstName: string;
//firstName=12 (X) Type 'number' is not assignable to type 'string'.
firstName="Leila" //is OK.
let age: number;
let isFemale: boolean;

//array
//let numArray:number[];
//numArray[0]=1; //is OK here but not in the browser.
// numArray[0]="1" (X)
//We cant use .push() because it is like pushing to nothing, even though
//we don't get error here but we get an error in the browser.
//the way to get around of this is, 
let numArray :number[]=[];
numArray[0]=1; //is OK here and in the browser.
// numArray[0]="1" (X)
//Note that we can only push numbers(with type number) to the array.
numArray.push(26);
console.log(numArray);

//union types

//arrays
let mixedArr:(number |string|boolean)[] = [];
mixedArr.push(12);
mixedArr.push(true);
console.log(mixedArr);

//variables
let uId:number | string;
//uId=false (X) Type 'boolean' is not assignable to type 'string | number'.
uId =15;
console.log(uId); //is Ok.

//Object
let personOne: object;
personOne ={name: 'John', age:30};
personOne =[]; //is Ok.
let personTwo :{name: string, age:number, isMale:boolean};//just declaring the object here.
personTwo= {
name:"Lily",
 age:25, 
 isMale:false
} //initilization
//if I add another property in the object above when initilizing I get 
//error as there is not in the object when declaring.