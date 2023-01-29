var definitionOfArray = "In coding and programming, an array is a collection of items, or data, stored in contiguous memory locations, also known as database systems . The purpose of an array is to store multiple pieces of data of the same type together.";
console.log(definitionOfArray);

//declare an array
var students = ["Rakib", "Raju", "Nihal", "Masud", "Sakib"];
// print by index
console.log(students[0]);
console.log(students[2]);

//number of elements
console.log(students.length);

//find index number and replace element
var elementWantToChange = students.indexOf("Masud");
console.log(elementWantToChange);
students[3] = "Alamin";
console.log(students);
//undefined value which is not assigned yet
console.log(students[10]);


//remove element from last
students.pop();
console.log(students);
//add element in last 
students.push("Habib");
console.log(students);

//remove first element
students.shift();
console.log(students);

//add first element 
students.unshift("Safid");
console.log(students);