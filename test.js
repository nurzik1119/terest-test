
//ELEMENTS
var first = parseFloat(document.getElementById("first").value);
var second = parseFloat(document.getElementById("second").value);

var e = 0;

//FUNCTIONS
function sum() {
    return e = first + second;
} function sub() {
    return e = first - second;
} function pro() {
    return e = first * second;
} function div() {
    return e = first / second;
}

function equal() {
    document.getElementById("answer").value = String(e);
}



