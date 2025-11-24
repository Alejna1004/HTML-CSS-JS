var programmingLanguages = ["JavaScript", "Python", "Java", "C#", "Ruby"];

console.log("Original array:", programmingLanguages);
console.log(programmingLanguages[1]); //First Element

console.log(programmingLanguages.length); //Length of the array

console.log(programmingLanguages[programmingLanguages.length - 1]) //Last Element

programmingLanguages.push("Go");
console.log("After push:", programmingLanguages);

programmingLanguages.pop();
console.log("After pop:", programmingLanguages);

programmingLanguages.unshift("Type Script");
console.log("After unshift:", programmingLanguages);

programmingLanguages.shift();
console.log("After shift:", programmingLanguages);

//Splice
programmingLanguages.splice(0, 2, "C++")
console.log("After splice:", programmingLanguages);

//random number
console.log("Random number between 0 and 1", Math.random()*5);
console.log("Random number between 0 and 4", Math.floor(Math.random()*5));

//array Destructuring
var students = ["Alice", "Bob", "Charlie"];
var [Student1, Student2, Student3] = students;
console.log("Destructed students:", Student1, Student2, Student3);
console.log("First student:", Student1);
console.log("Second student:", Student2);
console.log("Third student:", Student3);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [num1, num2, num3, ...otherNumbers] = numbers;
console.log("destructed numbers:", num1, num2, num3, otherNumbers);
console.log("first Number:", num1);
console.log("third Number:", num2);
console.log("fifth Number:", num3);
console.log(otherNumbers.toString())

