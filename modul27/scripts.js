function showMessage(){
    alert("This message is inside the function")
}
//showMessage()

function sum( number1, number2){
    return number1 + number2
}

console.log(sum(25, 5));
console.log(sum(50, 50));

function toCelsius(f){
    return (5/9) * (f-32);
}

console.log("54 Fahrenheit is equal to "+toCelsius(54)+" celsius")

//var arrowFunction = () => alert("Hello World!");
var arrowFunction = name => alert('Hello ${name}');
arrowFunction("John Doe");

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar);
}

//dsfucntion();
//alert(localVar);

function MinutestoSeconds(Minutes){
    return minutes * 60;
}

console.log(" 2 Minutes are equal to "+MinutestoSeconds(2)+" seconds")

function triangle(width, height){
    return(base * height) /2;
}

console.log(triangle(5, 3))

//objects

var car = {
    name: "Mercedes", 
    color: "red", 
    year: 2020, 
    km: 0,
    startEngine:function(){
        alert("Vroom!")
    }
}

var school = {
    name: "Digital School",
    subjects: "programing",
    students: 1500,
    year: 2016
}

alert(car.name)
alert(car['color']);

car.startEngine();

var computer = new Object()
computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce RTK 40";
computer.type = function(){
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
}

console.log(car.type());

console.log(car.getKilometers)

car.setKilometers = 100;
console.log(car.getKilometers);
function Computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}


var computer1 = new Computer("MacBook Pro","M1 8 core", "8GB", "5600m GPU")
var computer2 = new Computer("Lenovo", "Intel core i7", "16GB", "GeForce RTX 40")