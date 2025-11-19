//DOM
//var button1 = document.getElementById("btn1")

//button1.onclick = function(){
//    alert("Hello");
//}

var button1 = document.querySelector('button')

button1.onclick = function(){
    alert("Hello");
}

//addEventListener
button1.addEventListener/'mouseover', function(){
    alert('Hover!!!')
}

var button2 = document.getElementById('leave')
var button3 = document.getElementById('wheel')


button2.onmouseleave = function(){
    alert("Leave Event")
}

button3.onmousewheel = function(){
    alert("wheel event")
}

var button4 = document.getElementById('style')
var text = document.getElementById('txt')

button4.onclick = function(){
    text.style.color = "red"
    text.style.backgroundColor = "lightgrey"
    text.style.textAlign = "center"
    text.style.fontSize = "100px"
    text.style.padding ="20px"
}

text.onmouseover = function(){
    text.style.cssText = "color: red; background-color: lightblue; text-aling: center; font-Size: 100px; padding: 20px;"
}

console.log("hello")

var button5 = document.getElementById('classStyle')
var heading2 = document.getElementById('click', function(){
    heading2.classList.toggle('jsStyle')
})