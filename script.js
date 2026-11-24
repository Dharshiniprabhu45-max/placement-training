//function showMyMessage(){
    //var a=10;
    //var b=20;
    //console.log(a+b);

//let a=10;

//a=20;

//var b=20;

//var b=30;

//console.log(b);

//const c=30;

//Data types in javascript
//1.primitives:number,string,boolean,null,undefined,symbol,bigint;
//1.Number
let c=30;
let d=40.0;
console.log(d);
//2.string
let str="hello";
let str1='hello';
let str2=`hello`;
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);
//3.boolean
let isTrue=true;
console.log(typeof isTrue);
console.log(isTrue);

//4.null
let isValid =null;
let age=27;
if(age>=18){
    isValid=true;
}
console.log(isValid);
console.log(typeof isValid);

//5.undefined
let isAvailable;
console.log(isAvailable);
console.log(typeof isAvailable);

//6.symbol
let sym=Symbol('hello');
console.log(typeof sym);
console.log(sym);

//7.bigint
let big=BigInt(10678906543215678);
console.log(typeof big);
console.log(big);


//2.non-primitives:object,arrays,functions;

//1.object
let person={
     name:"john",
     age:30,
     college:"sri eshwar college of engineering",
     address:{
        city:"coimbatore",
        state:"tamilnadu",
     },
     contactNumbers:1234567890 
}
console.log(person.name);
console.log(person);
console.log(person.age);

//2.arrays

const numbers=[1,2,3,4,5];
//let age=new Array(5);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//built in array methods
//1.push

numbers.push(6);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//2.pop
numbers.pop(2);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//3.shift
numbers.shift();
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//4.includes
console.log(numbers.includes(3));
console.log(numbers.includes(10));

//5.indexOf
console.log(numbers.indexOf(3));

//6.slice

const numbercopy=numbers.slice(2,4);
console.log(numbercopy);

//functions
 function add(a,b){
    return a+b;
 }

 let a=10;
 let b=20;
 let k=add(a,b);
 console.log(k);

 function add(name){
    console.log("hello "+name);

 }
add("jungkook");
add("jimin");
//arrow
const multiply=(a,b)=>{
    return a*b;
    }
console.log(multiply(10,20));