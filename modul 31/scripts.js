for (i = 0; i < 5; i++){
    text += "The number is" + i + "<br>";
}
//the number is 0
//the number is 1
//the number is 2
//the number is 3
//the number is 4

var person ={
    firstname: "John",
    lastname: "Doe",
    age: 26
};

var text = '';
var x;
for(x in person){
    console.log(text += person[x]);
}

//for/of
//looping over a list

var names = ['Steve', 'Bill', 'Mark'];
var x;

for(x of names){
    //console.log(x);
    document.write(x + "<br>");
}

//looping over a string
var txt = "JavaScript"
var x;
for(x of txt){
    document.write(x + "<br>");
}

//do/while
//let j = 0
//do{
//    j =+ 1;
//    console.log(j);
//} while(j < 5);



//while loop
let n = 0;
let x = 0;
while(n < 3){
    n++;
    console.log(y += n);
}

