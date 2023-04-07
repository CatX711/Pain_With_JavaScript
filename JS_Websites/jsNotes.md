
# NOTES: 

*Tutorial: <a href="https://www.youtube.com/watch?v=hdI2bqOjy3c">Click Here</a>*
<br />
<br />
<br />
<br />



<p>These are one line comments // </p> 

<p>These are multiple line comments --> /* */</p>

<br />
<br />

Creating your `first lines of code.` 
<br />
(Displaying text on the screen, creating popups/alerts, plus error and warning messages.)

```js
alert("Hello, World!"); // alert creates a popup with a message 

console.log("Hello World"); // prints a simple message in the console 
console.error("This is an error"); // creates an error message in console 
console.warn("This is a warning"); // creates a warning 
```

## REMEMBER:

**Use these: let, const** 

*Let: lets you change the value of a variable if wanted*

### E.G

```js
let age = 30;
age = 31;

console.log(age)
```

**OUTPUT:**

```shell
31
```

<br />
<br />
*Const: short for constant- value never changes*

### E.G

```js
const age = 30;
age = 31;

console.log(age);
```

OUTPUT:

```shell
Uncaught TypeError: invalid assignment to const 'age'
    <anonymous> file:///Users/username/master-folder/folder/filename:4
```
<br />
>This is an error. Const, is short for constant, which means that you cannot change it- the value stays the same throughout the whole program.
So, note this:


<br />
<br />

**Always use const unless you know you're going to change the value**


### Example of when you would use let:


* In a game to alter score

```js
let score = 0; <- initializes the variable

score = 10;

console.log(score);
```

<br />
<br />

## Data types:

`String, Numbers, Boolean, Decimal, null, undefined, Symbol (symbol not used that often)`



### String:

*Text.*
<br />

```js
const name = "John";
```

### Number:
<br />

```js
const age = 30;
```
### Decimal:

*Any number with a decimal point.*
<br />

```js
const rating = 4.5;
```


### Boolean:

*True/False*
<br />

```js
const is Cool = true;
```

### Null:

*(Nothing in it.)*
<br />

```js
const x = null; // <- var with nothing in it
```

### Undefined: Two Types

**1: Defined Undefined**

*`YOU` define that your variable is undefined*
<br />

```js
const y = undefined;
```

**2: Auto-Undefined**

*Command line automatically assignes your variable with an `undefined` value, as you have not given it any value.*
<br />

```js
let z; <- same as above
```

<br />

****

## How to check the `variable type`:

```js
console.log(typeof var_name)
```

### E.G

```js
console.log(typeof age);
```

**OUTPUT:**

```shell
number
```

#### However, when you do null:


**OUTPUT:**

```js
object // <- error in javascript


```

The reason this happens is: When Javascript was created, an object had the value of 0. No biggie. However, when Null was introduced, as it is literally nothing, it is automatically assigned a value of 0.


## TEST CODE

```js
const name = "John";
const age = 30;

// Concatenation

console.log("My name is " + name + " and I am " + age + "!") 

// Template String 

console.log(`My name is ${name} and I am ${age}`) // new and easier way of concatenating

// or

const hello = (`My name is ${name} and I am ${age}`)

console.log(hello);

```

>The above shows multiple different ways of putting in values into a string.


## How to print the amount of letters in a variable

const s = "Hello World";

console.log(s.length);


// How to change the case of the string to uppercase/lowercase

console.log(s.toUpperCase);

OUTPUT:

HELLO WORLD!

or

console.log(s.toLowerCase);

OUTPUT:

hello world

// How to get a substring

select how many letters you want to take from a string 
letter one is 0

E.G

const s = "Hello world";

console.log(s.substring(0, 5));

OUTPUT:

Hello_  

(_ is the space but space isnt visible so i put it there for visibility) 

E.G 2

const s = "Hello world";

console.log(s.substring(0, 8));

Hello Wor


// And you can also use the case changer code at the same time



const s = "Hello world";

console.log(s.substring(0, 3).toUpperCase);

OUTPUT:

HELL

// Arrays -- variables that hold multiple values

reffer to tutorial at 22:50 for this cuz i cant explain it but its some arrays crap

but the code is 

console.log(s.split(""))


easier code:

const s = "technology, it, programming, development"

console.log(s.split(", "));

OUTPUT:

["technology", "it", "programming", "development"]

0: "technology"
1: "it"
3: "programming"
4: "development"



MORE ARRAYS:

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ["apples,", "oranges", "pears"];

console.log(fruits)

ALSO:

console.log(fruits[1]);

OUTPUT:

oranges

(apples is 0, oranges is 1, pears is 2)


AND YOU CAN DO:

fruits[3] = "grapes";

console.log(fruits)

OUTPUT:

["apples,", "oranges", "pears", "grapes"]

0: "apples"
1: "oranges"
2: "pears"
3: "grapes"

NOTE:

when using const you can manipulate the variable, you cann add to it etc, however, you can only change a value using let.


add a value to the end of the array:

fruits.push("mangos");


add a value to the beginning of the array:

fruits.unshift("strawberries")


take the last value off:

fruits.pop();



how to check if something is an array:

console.log(Array.isArray("oranges"))

OUTPUT:

true

OR:

console.log(Array.isArray("hello"))

OUTPUT:

false


check a value's index:

console.log(fruits.indexOf("mangos"))



const person = {
	firstname: "John",
	lastname: "Doe",
	age: 30,
	hobbies: ["music", "movies", "sports"],
	address: {
		street: "50 main st",
		city: "Boston",
		state: "MA"
	}
}

// console.log(person.firstname, person.lastname)

console.log(person.hobbies[1]);

OUTPUT:

movies


OTHER E.G

console.log(person.address.city);

OUTPUT:

Boston


OTHER OTHER EXAMPLE:

const {firstname, lastname, address: { city}} = person;

console.log{firstname};

OUTPUT:

John

console.log{city};

OUTPUT:

Boston



you can also add values

person.email = "johndoe@gmail.com"



convert js code to json:

const todos = [
	{
		id: 1,
		text: "Take out trash",
		iscompleted: true
	},
	{
		id: 2,
		text: "Meeting with boss",
		iscompleted: true
	},
	{
		id: 3,
		text: "Dentist appointment",
		iscompleted: false
	}
];

console.log(todos[1].text);

OUTPUT:

all of those values printed onto console




// converts code into json 

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)



OUTPUT:

json code

[{"id":1,"text":"Take out trash","iscompleted":true},{"id":2,"text":"Meeting with boss","iscompleted":true},{"id":3,"text":"Dentist appointment","iscompleted":false}]

 



// for loops

for(let i = 0; i < 10; i++) {
	console.log(i);
} 

// what this does

it starts at 0, then prints i + 1 until it reaches 9, because we say it has to do this if i is smaller than 10, and if it adds 1 more it will be 10 so for some reason the language thinks it needs to stop at 9 lol.

if you want ten included, use the less than or equal sign



for(let i = 0; i <= 10; i++) {
	console.log(i);
} 


ANOTHER WAY TO DO THIS:

for(let i = 0; i < 10; i++) {
	console.log(`For Loop Number: ${i}`);
}




// While loops

let i = 0;
while(i < 10) {
	console.log(`While Loop Number: ${i}`);
	i++;
}

*REMEMBER*

ALWAYS use i++, not i+





more crappy code lol:

for(let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

OUTPUT:

Take out trash
Meeting with boss
Dentist appointment


or


for(let todo of todos) {
	console.log(todo.id);
}

(code here is same as above, just more easy to read)

// todo (located at ->todo<- of todos) could be anything, it just looks nice to say each thing printed is one todo of todos. it could be t, b, c, even yocaca, but todo sounds nice


a few more variations of that:

// forEach, map, filter


foreach:

todos.forEach(function(todo) {
	console.log(todo.text);
});

map:

same as above i think idk lmao

map also:

const todoText = todos.map(function(todo) {
	return todo.text;
});

console.log(todotext);

does something different but i dont know how to explain it soooo... see time: 43:00-45:00 somewhere inbetween those two


filter:

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true;
});

console.log(todoCompleted)



does something different but i dont know how to explain it soooo... see time: 45:00-46:00 somewhere inbetween those two


one final goofy way:
todo

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true;
}).map(function() {
	return todo.text;
})

console.log(todoCompleted)


at this point i dont even know what this does lmao




const x = 40;
if(x > 10) {
	console.log("x is 10");
} else if(x > 10) {
	console.log("x is bigger than 10!!!")
} 
else {
	console.log("x is less than 10!")
}

// use === instead of == to match data types


// OR (||):

const x = 4;
const y = 10;

if(x > 5 || y > 10) {
	console.log("x is more than 5 or y is mroe than 10");
}


// || = or


// AND (&&):


const x = 7;
const y = 9;

if(x > 5 && y > 10) {
	console.log("x is more than 5 or y is mroe than 10");
}

// && = and

this program outputs nothing, because && means that this will only console log if x is greater than 5 *AND* y is greater than 10



// TURNERY OPERATORS (short versions of if statements)

const x = 10;

const color = x > 10 ? "red" : "blue";

// note:

? = then

: = else

when you do console.log(color); 
OUTPUT:

red




// SWITCHES:

const x = 10;

const color = "green";

switch(color) {
	case "red":
		console.log("colour is red");
		break;
	case "blue":
		console.log("color is blue")
	default:
		console.log("color is NOT red or blue");
		break;		
} 

OUTPUT:

color is NOT red or blue




// FUNCTIONS


function addnums(num1, num2) {
	console.log(num1 + num2);
}

addnums(5,4)

// 5 is num1 4 is num2

// if you do addnums without two numbers in the brackets when you call it, you get a NaN error (not a number);




however, if you make predefined values:

function addnums(num1 = 1, num2 = 3) {
	console.log(num1 + num2);
}

addnums();


// OUTPUT:

4


// and if you put two numbers into the addnums in the bottom, it overwrites the predefined values.






// AND YOU CAN DO:

function addnums(num1 = 1, num2 = 3) {
	return num1 + num2;
}


but then you would have to do

console.log(addnums(6, 27000))








// BIG BOY STUFF: ARROW FUNCTIONS



const addnums(num1, num2) => {
	console.log(num1 + num2);
}

addnums(5, 5);


// if you use arrow functions you dont even need these -> {}


const addnums(num1, num2) => console.log(num1 + num2);



// and you dont need the console log up there, just put it below!


const addnums = (num1, num2) => num1 + num2;

console.log(addnums(1, 2));


// and if you have 1 value, you dont even need the brackets!


const addnums = num1 => num1 + 5;

console.log(addnums(5)); // sets num1 to 5


OUTPUT:

10



















































































































































































































































































































































































































































































































