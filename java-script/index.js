// console.log("Hello world");
// var number1 = 20;
// var number2 = 40.67;
// console.log(number1+number2);

// // Data types in javascript

// // numbers
// var num1 = 20;
// var num2 = 70;

// // string
// var str1 = "This is a string"
// var str2 = 'This is also a string'
// console.log(str1)
// console.log(str2)

// // objects
// var marks = {
//     riya : 60,
//     kashish : 50,
//     arpita : 99
// }
// console.log(marks)

// // Boolean
// var a = true
// var b = false
// console.log(a,b);

// // undefined and null
// var und;
// var und = undefined;
// console.log(und);

// var n = null;
// console.log(n);

// // At very high level, there are two types of data types in java script
// // 1. Primitive Data type - undefined, null, number, string, boolean, symbol(unique key)
// // 2. Reference Data Type - Array and objects

// // Array
// var arr = [1,2,"string",3,4,5]
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr)

// // array iteration is done using for loop
// var arr1 = [1,2,3,4,5,6,7];
// for(var i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }
// //or you can use forEach
// arr1.forEach(function(element)){
//     console.log(element);
// }

// // Array Methods
// let myarr = ["hello", "world", 20, 70];
// console.log(myarr.length);

// myarr.pop()   // remove the last element of the array
// myarr.push("arpita")   // add element at the last of array
// myarr.shift()   // remove the first element
// console.log(myarr)
// myarr.unshift("annu") // add element at the first
// const newlen = myarr.unshift("arpita")
// console.log(newlen);
// console.log(myarr);

// myarr.toString()
// myarr.sort() // sort the numbers array


// // Operators in javascript

// // Arithmetic Operator
// var x=4
// var y=2
// console.log("x+y", x+y);
// console.log("x-y", x-y);
// console.log("x*y", x*y);
// console.log("x/y", x/y);

// // Assignment Operator
// var z=b
// z +=3
// z-=4
// z*=5
// console.log(z)

// // Comparison Operator
// var a1 = 30;
// var b1 = 20;
// console.log(a1==b1);
// console.log(a1>b1);
// console.log(a1<b1);
// console.log(a1>=b1);
// console.log(a1<=b1);

// // Logical Operator - and, or, not
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// console.log(!false);
// console.log(!true);


// // Function in javascript

// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14, 16);
// console.log(c1, c2);


// // Conditional in javascript

// var age = 10;

// // if statement
// if(age>20){
//     console.log("You are not the kid");
// }

// // if-else statement
// if(age>20){
//     console.log("You are not the kid");
// }
// else{
//     console.log("you are a kid");
// }

// // if-else ladder 
// if(age>20){
//     console.log("you are not kid")
// }
// else if(age==20){
//     console.log("age is equal to 20")
// }
// else{
//     console.log("you are a kid")
// }


// // loops in javascript

// // while loop
// var arr = [12, 38, 49, 60, 70]
// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// // do while loop
// do{
//     console.log(arr[i]);
//     i++;
// } while(i<arr.length);


// // String Methods in JavaScript
// let mystring = "Hello my name is Arpita";
// console.log(mystring.length)
// console.log(mystring.indexOf("hello"))
// console.log(mystring.lastIndexOf("hello"))
// // string slicing
// console.log(mystring.slice(0,4))
// // replace method
// d = mystring.replace("hello", "hi");
// console.log(d, mystring)



// // DOM - Document object model
// let myDate = new Date();
// console.log(myDate.getDay());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())


// document.getElementById('click').style.border = '2px solid blue'


// // DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass)

// elemClass[0].style.background = "yellow"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph"
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold paragraph"
// tn[0].appendChild(createdElement2);

// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); --> remove an element


//// SELECTING USING QUERY
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('the document was loaded')
// }


//// EVENTS IN JAVASCRIPT

// firstContainer.addEventListener('click', function(){
//     console.log("clicked on container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of the container")
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log("mouse up when clicked on container")
// })


//// ARROW FUNCTION
// function sum(a,b){
//     return a+b;
// }
// sum =(a,b)=>{
//     return a+b;
// }


//// SETTIMEOUT AND SETINTERVAL
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


//// JAVASCRIPT LOCAL STORAGE
// localStorage.setItem('name', 'arpita')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();


//// JSON
// obj = {name: "arpita", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed =n JSON.parse(`{"name":"arpita","length":1,"a":{"this":"that"}}`)
// console.log(parsed);


// Stack and Heap Memory 
// stack memory used in primitive, when we declare a variable we get a copy 
// Heap memory used in non-primitive, changes done in original value

let name = "Arpita"
let anothername = "Annu"

let userone = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userone

userTwo.email = "arpita11@gmail.com"

console.log(userone.email);
console.log(userTwo.email);


// Arrow Function

const sayhello = () => {
    console.log("Hello");
}

const greeting = (name, greet) => {
    console.log(greet + " " + name)
}

sayhello()
greeting("Arpita", "Good Afternoon")

// without arrow function

// const x = {
//     name:  "Arpita",
//     role: "JS Developer",
//     exp: 5,
//     show: function() {
//         let that = this
//         console.log(this)
//         setTimeout(function() {
//             console.log(`The name is ${that.name}\nThe role is ${that.role}`)
//         }, 2000)
//     }
// }


// with arror function
const x = {
    name:  "Arpita",
    role: "JS Developer",
    exp: 5,
    show: function() {
        // let that = this
        // console.log(this)
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}


x.show()