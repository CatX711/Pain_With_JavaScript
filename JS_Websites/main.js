// REFFER TO jsNotes.md FOR JAVASCRIPT NOTES

// construction function

function Person(firstName, lastName, dob) {   // construction functions always start with a capital letter
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // date of birth surrounded by the date constructor
  this.getBirthYear = function() {
  	return this.dob.getFullYear();
  }
}

/*
this.getBirthYear is a method defined inside the Person constructor function. 
This method returns the year of birth of the Person instance.
Inside the getBirthYear method, this.dob refers to the dob property of the current Person instance.
dob is a Date object, and getFullYear() is a method of the Date object that returns the year of the date in four digits (e.g. 2023).

So, when you call person1.getBirthYear(), it will return the year of birth of person1 based on the dob date that was passed in during the instantiation. 
For example, if person1 was instantiated with a dob of "09/09/1901", person1.getBirthYear() would return 1901.
*/

// instantiate object with constructor function

const person1 = new Person("Daniel", "Catarig", "9/9/1901");
const person2 = new Person("Nathaniel", "Chenkovich", "4/3/1980");
const person3 = new Person("James", "Ballard", "2/6/2004");

console.log(person2.firstName);
console.log(person2.dob);



// OUTPUT:

/*

Nathaniel
Date Thu Apr 03 1980 00:00:00 GMT+0100 (British Summer Time)

(we could also add a time as shown by the 00:00:00)
/*

/* and you can also do:

console.log(person2.dob.getFullYear());



*/