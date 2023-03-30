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

let person1 ={
    name : "John",
    age : 30,
    isMale : true,
}
//person = [] Type 'undefined[]' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person = {}; Type '{}' is missing the following properties from type '{ name: string; age: number; isMale: boolean; }': name, age, isMale
//person.name = 12; (X)
person1 = {
  name: "Joe",
  age: 35,
  isMale: true,
}; //is OK.
person1.name = "James" //is OK.
//person.phone = 35; Property 'phone' does not exist on 
//type '{ name: string; age: number; isMale: boolean; }'. However in JS it is OK.
console.log(person1);

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

//any
//If I want to have any possible different types when initializing later,
// we can use any, however we should be aware that we might face same kind of issues in JS.

let age1: any;

age = 25;
console.log(age);

age1 = "mahdi";
console.log(age);

age1 = true;
console.log(age);

let mixed: any[] = [];

mixed.push(25);
mixed.push("mahdi");
mixed.push(false);

console.log(mixed);

let person: { name: any; age: any };

person = { name: "mahdi", age: 25 };
console.log(person);

person = { name: 25, age: "mahdi" }; //is OK here but it might makes our app become down or etc.
console.log(person);

// Different Files

//For compiling different files in TS, (here test1 and test2)
//we can either do them separately or at the same time in one line 
// also by adding -w we help it to save automatically for future use
//tsc test1.ts test2.ts -w

//Arranging files in VSCode
//We can have a folder named public for example and put all files 
//that we want to 
//We can have a folder named source(src) for example and put all ts files
//here what is important when compiling with tsc we have go to the right path
//for example for compiling test1 which is now inside the src folder we should use
//     tsc ./src/test1.ts
//Note that in this cade the file test1.js will be created in the 
//same folder(src folder).
//If we want it to be created in the other folder for example 
//in public folder  we should give it the direction as follows:
//     tsc ./src/test1.ts --outDir ./public 
// also for saving the changes automatically we use
// tsc ./src/test1.ts --outDir ./public -w
// Now imagine we have so many ts files, and we want to compile them all at the same time
// in this case its better to create a tsConfig.json file with the command 
// tsc --init
//we see the target changes our code to an specific version of ECMAScript that we can change if we want
//another things which are important is rootDir and its outDir 
//We see the rootDir is like //"rootDir": "./", first we comment it out and 
// we put the path of all the files that we want to change their directory (inside the quotation)
//In outDir we choose where we want them to be compiled.
//In here I changed "rootDir": "./",   TO   "rootDir": "./src", AND
//"outDir": "./",  TO   "outDir": "./public",  
//It means compile all the ts files in src to the public so js files will be created in the public folder.
//So we don't need to give address in the terminal, it would be 
//applied automatically with only typings tsc and either tsc -w for auto saving the changes also.
// For the last point here, I want to mention that sometimes we have some ts files which we don't want them 
// to be automatically compiled (with only tsc in the terminal) so in this case we can go to the tsConfig.json
//file and at the end of it we use the property of include and give the name of the folder that
// we want its files to be compiled.
//"include": ["src"]
//In this case, if we want to compile any file outside the src folder 
// we should do it manually. tcs and name of the file and -w for
// auto saving of changes if we want

// ? Question: What is "use strict"; that we get in the js files.


//Functions

//if we declare a function named greet or even just declare it with its type like
let greet: Function;
//type of greet is function. This means that we cant say for example 
//great = "dfdh" or a number but we can say sth like this

greet = () => {
    console.log('Hello, World');
}

//we can fix our parameters type like this:
//Note that this function does not return anything so type of it is void.
//If we hover over the arrow we can see it.
let sayHello = (fName: string) => {
    console.log('Hello', fName);
}
//if we call sayHello() without arguments or with arguments which
// are not strings then we get two different errors


// Functions which returns values.
// The type of these functions should be the type of their return values.
//In the following example the type of the return value is number so 
//the type of the 

let add = (a: number, b: number) => {
    return a+b;
}

// let result = add(12, 2);
// console.log(result);

// console.log(add(5, 7));


let sub = (a: number, b: number, c: number | string = 0) : number => {
    console.log(c);
    return a-b;
}

sub(2, 1, 7); 
//c is 7 in this case, it also could be a string as it has union types.

// let result: string;
// result = sub(5,2);

//Type of the function sub is number, as its parameters are numbers and
//it returns a number, we can see that by hovering over the arrow, However,
//in the above example we see its shown with :number after the () anyway, so 
//we can see it easily in case we have a long codes.
//so if we define the return with another type like string we get error.

//Arbitrary parameters:
//If our function has more parameters than the arguments we usually get error 
//In the above function if we consider c as a arbitrary parameter (with ?) and 
// define it like this c?: number | string , we don't get error.
//In this case when console.log c we get undefined as we defined it as a parameter
// but we didn't give any corresponded arguments for it. Another way to 
//not getting the error is giving it a default value, like here we gave it 0.
//c: number | string = 0
//If console.log the c we get 0.
//Note that if we give an argument for the parameter c, 
//the priority will be with the argument.

