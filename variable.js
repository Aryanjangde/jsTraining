// this is the break down of for loop and let is initialized in every step.
for(let i= 0; i<2; i++){
    console.log(i)
}

{
    let i=0;
    console.log(i)
}
{
    let i= 1;
    console.log(i)
}

// ^ this is the breakdown of var

for (var i=0; i < 2; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000)

}

var i;

{
    i=0;
    if(i<2){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    
    }
}

{
    i++;
    i=1;
    if(i<2){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    
    }
}
{
    i++;
    i=2;
    if(i<2){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    
    }
}


// & if any async function is accepting a callback then it means that it will not return promise

// ~ 
function sayHi(){
    console.log(name);
    console.log(age);
    var name = "Lydia"
    let age = 21;
}
sayHi()

// ~ how js sees this

function sayHi(){
    var name;
    console.log(name);
    console.log(age);
    var name = "Lydia"
    let age = 21;
}
sayHi()

// ^ what are the data types in js 
// * primitive and non primitive
// * primitive data types - Number, String , Boolean, Undefined, Null
// * undefined means therer is no value is specified in the memory
// * js tried to find the value but we have specified it as null
// * primitive data types are immutable

// ^ this ---| 
let str = "abcd";
str.charAt(0);

// ^ and this 
(new String(str)).charAt
// ^ are same

// ^In js everything is nothing but an object;

// * Arrays are nothing but an object with consicutive numerical sequence

[1, 2, 3, 4]

let obj ={
    0:1,
    1:2,
    2:3,
    3:4
}
// *
// ~__________________________
// * 
let c = {
    greeting: "hi",
    key2 : {
        1:2
    }
}
let d;
d = c;
c.greeting = "Hello"
console.log(d.greeting);
// *

// ^ shallow copy 

let e = {
    ...c
}

// ^ this method will take a long time
JSON.parse(JSON.stringify(c))
// * The object c is converted into a JSON string. 
// * This process involves iterating through every key 
// * and value in the object and converting it to a string representation.

// ^ this is the deep copy

let e_ = {
    ...c,
    key2: {
        ...e_.key2
    }
}

// * the string can be type cast in boolean and number;

// ~ true
"" == false;
"" == 0
// ~ false
"" == undefined
"" == null

// ! In string the data type in front of the "+" only will it get type casted.
//^ "1"+0 = 10
// ! here if anything other than + is there the string will type caste itself.
// ^ "1" - 0 = 1  

// 
"1" + true
'1true'
// 
1 + true
2
// 
// * meaning of NaN is - we are sure that it is not a number.
isNaN()
// ^ any vriable whose keyword is not written, by default the keyword is var.

// ! 
function sum(num1, num2, ...rest){
    console.log(num1, num2, rest);
}

sum(1, 2, 3, 4, 5);
// * if ...args = 1, 2, 3, 4, 5 then args = [1, 2, 3, 4, 5]
array.forEach((element, index) => {
    console.log(index);
    return 
});

// * internal impolementation

for(let i=0; i<array.length; i++){
    function forEach(element, index){
        console.log(index)
        return;
    }
    forEach(array[i], i)
}
// ^ in for index
for(let i in arr){

}
// ^ for - value - this works only for array
for(let i of array){

}

console.log(a)
var a = 2;
console.log(a)
function a(){
    console.log(a);
}
console.log(a)
a()

// * interpreted code;

var a;
a = function(){
    console.log(a);
}
console.log(a);
console.log(a);
a();