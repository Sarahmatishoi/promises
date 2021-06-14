// // let fruits=["mango", "orange","apples"];
// // console.logln(fruits);
function Numbers(){
    for (x=1;x<=100;x++){
        if(x%3==0 && x%5==0){
            console.log("FizzBuzz");
        }
        else if(x%3==0){
            console.log("Fizz");
        }
        else if(x%5==0){
            console.log("Buzz")
        }
        else{
            console.log(x)
        }
    }
}
Numbers();
for(let i=0;i<15;i++){
    if(i%2==0){
        console.log("is even")
    }
    else if(i%2!=0){
        console.log("is odd")
    }
    else{
        console.log(number)
    }
}
function checkGrade(){

}
var mpesa_balance=500;
var price=150;
if(mpesa_balance>=price){
    console.log("you can purchase the fruit!");

}
else{
    console.log("sorry you are unable to purchase.mpesa is less than the price")
}
let study=false;
let studyPromise=new Promise((resolve,reject)=>{
    if(study){
        resolve("I am studying")
    }
    else{
        reject(new Error("I am sleeping"))
    }
})
.then(()=>{
    console.log("It has been great")
})
.catch((error)=>{
console.log (error)
});
// .finally(()=>{
// console.log("I made it")
// });
console.log(studyPromise)

 async function foo(){
    let promise=await studyPromise;
    console.log(promise);
    console.log("am playing")
}
foo()
function outer() {
    var a = 1;
    function inner() {
        var b = 2;
        console.log(a + b);
    } 
    inner();    
    console.log(a); 
}
outer();
let a=100;
let b='100';
function  compare(){
var num1=a==b;
var num=a===b;
}
// console.log(num1)
// console.log(num)
compare();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0])
function foo() {
	var a = 1;
	function bar() {
		var b = 2;
		function baz() {
			var c = 3;
			console.log( a, b, c );	// 1 2 3
		}
		baz();
		console.log( a, b );			// 1 2
	}
	bar();
	console.log(a);				// 1
}

foo();
function foo() {
	var a = 1;
	if (a >= 1) {
	    	var b = 2;
		let c = 3;
		while (c < 5) {
			let d = c * 2;
			c++;
			console.log( a + b + d ); // 9, 11
		}
	}
	console.log(a)  ;  		// 1
	console.log(b);  		// 2
}
foo();
var marks = 60; 
var grade = null;

if (marks >= 50) {
    grade = 'Pass';
} else {
    grade = 'Fail';
}
console.log(grade);

// immediately invoked function
(function IIFE(){
	var a = 10;
	console.log( a );	
})( );
console.log( a );
//closures
function outer(x) {
	// parameter `x` is a variable within outer function

	// inner function `inner()` uses `x`, so
	// it has a "closure" over it
	function inner(y) {
		return y + x;
	};

	return inner;
}
var plusOne = outer(1);
var plusTwo = outer(2);
console.log(plusOne(3));     // 4
console.log(plusTwo(4));     // 6

//modulus
function User(){
	var username, password;
	function doLogin(user,pw) {
		username = user;
		password = pw;
		// do the rest of the login work
	}
	var publicAPI = {
		login: doLogin
	};
	return publicAPI;
}

// create a `User` module instance
var janeDoe = User();

// user to access login API 
janeDoe.login( "janeDoe", "mypwd123" );
console.log(janeDoe.login)


class Person {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log(this.name);
    }
  }
  
  let user = new Person("John");
  user.sayHi();

  var obj1 = {
      a: 10
  };
  
  // create `obj2` and link it to `obj1`
  var obj2 = Object.create( obj1 );
  obj2.b = "hello world";
  
 console.log(obj2.b);		// "hello world"
  console.log(obj2.a);		// 10 <-- delegated to `obj1`
 // We have a person object
//object destructuring 
let person = {
  name: 'John Doe',
  age: 25,
  profession: 'Frontend developer'
};
let {name, age, profession} = person;

console.log(name);  // John Doe
console.log(age);  // 25
console.log(profession); // Frontend developer

// export function square(x) {
//     return x * x;
// }
// export function sum(a, b) {
//     return a + b;
// }
// import { square, sum } from 'lib';
// console.log(square(5));  // 25
// console.log(sum(4, 3));   // 7


const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );
  
  wait(200)
    // onFulfilled() can return a new promise, `x`
    .then(() => new Promise(res => res('foo')))
    // the next promise will assume the state of `x`
    .then(a => a)
    // Above we returned the unwrapped value of `x`
    // so `.then()` above returns a fulfilled promise
    // with that value:
    .then(b => console.log(b)) // 'foo'
    // Note that `null` is a valid promise value:
    .then(() => null)
    .then(c => console.log(c)) // null
    // The following error is not reported yet:
    .then(() => {throw new Error('foo');})
    // Instead, the returned promise is rejected
    // with the error as the reason:
    .then(
      // Nothing is logged here due to the error above:
      d => console.log(`d: ${ d }`),
      // Now we handle the error (rejection reason)
      e => console.log(e)) // [Error: foo]
    // With the previous exception handled, we can continue:
    .then(f => console.log(`f: ${ f }`)) // f: undefined
    // The following doesn't log. e was already handled,
    // so this handler doesn't get called:
    .catch(e => console.log(e))
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`g: ${ g }`))
    .catch(h => console.log(h)) // [Error: bar]
  ;

  





