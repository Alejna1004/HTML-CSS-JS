var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('text_id')

button.onClick = function(){
    text.innerHTML = input.value;
}

//Regular expressions

var text = "The best school in the world is digital school!";
var result = text.search("Digital School");
document.getElementById("result1").innerHTML = result;

//replace method
var text = "The best school in the world is digital school!";
var result = text.replace(/Digital School/, "Another School");
document.getElementById("result3").innerHTML = result

//test method
var text = "abcdef"
var regex = new RegExp('zxh')
document.getElementById("result4").innerHTML = regex.test(text)

//match method
var text = "My school is the best school in the world!";
var regex = /school/g;
document.getElementById("result5").innerHTML = regex.match(text)

var text = "My school is the best school in the world!";
var regex = /i/g;
document.getElementById("result6").innerHTML = regex.match(regex)

var text = "My school is the best school in the world!";
var regex = /[abc]/g;
document.getElementById("result7").innerHTML = regex.match(regex)

var text = "My school is the best school in the world!";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = regex.match(regex)

var text = "My school is the best school in the world!";
var regex = /(top|best|school)/g;
document.getElementById("result9").innerHTML = regex.match(regex)

var text = "100 percent";
var regex = /\d/g;
document.getElementById("result10").innerHTML = regex.match(regex)

var text = "My school is the best school in the world!";
var regex = /\s/g;
document.getElementById("result11").innerHTML = regex.match(regex)

var text = "Heyy, how are you??";
var regex = /e+/g;
document.getElementById("result12").innerHTML = regex.match(regex)

var text = "so, I hope we'll see again soon.....";
var regex = /so*/g;
document.getElementById("result13").innerHTML = regex.match(regex)

var text = "hey, hi, hiiii";
var regex = /hi?/g;
document.getElementById("result14").innerHTML = text.match(regex)

var text = "hello, helloo, hellooo, hellooooo!!!";
var regex = /0{3}/g;
document.getElementById("result15").innerHTML = text.match(regex)

var text = "hello, helloo, helloooo, helloooooo!!!";
var regex = /o{3,5}/g;
document.getElementById("result16").innerHTML = text.match(regex)

var text = "bestfriend, friend";
var regex = /end5/g;
document.getElementById("result17").innerHTML = text.match(regex)

var text = "cat, category, catalog";
var regex = /^cat/g;
document.getElementById("result18").innerHTML = text.match(regex)
