const screen= document.querySelector(".screen");
let screenValue="";

function add(a, b) {

    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }else {
        return a / b;
    }};
function c(a){
    a=0;
    return a;
};
function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleOperator(value);
    }
    else{
        handleNumber(value);  
    }
    rerendder();
};
function handleOperator(operator){
    switch(operator){
        case "C":
            screenValue="0";
            break;      
        case "=":
            console.log("Equals");
            break;
        case "←":
            if(screenValue.length=== 1){screenValue=0}else{screenValue=screenValue.substring(0,screenValue.length-1)}; 
           
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(operator);
            break;
        default:
            break;
    }
};
function handleNumber(number){
    if(screenValue==="0"){
        screenValue=number;
    }else{
    screenValue+=number;
   
    }
};
function buttonValue(){
     document.querySelector(".calc-buttons").addEventListener("click", function(event){
       buttonClick(event.target.innerText)});
}
function rerendder(){
    screen.innerText=screenValue;
}
function handleMath(operator){
    
}

buttonValue();
