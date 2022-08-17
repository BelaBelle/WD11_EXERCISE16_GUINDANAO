

const pounds = function(){
    let num1 = document.getElementById("kilogramsInput").value;
    let result = Number(num1) * 2.2046;
    document.getElementById("poundsOutput").innerHTML = result;

} ;

const ounces = function(){
    let num1 = document.getElementById("kilogramsInput").value;
    let result = Number(num1) * 35.274;
    document.getElementById("ouncesOutput").innerHTML = result;

} ;

const tonne = function(){
    let num1 = document.getElementById("kilogramsInput").value;
    let result = Number(num1) / 1000;
    document.getElementById("tonneOutput").innerHTML = result;

} ;

