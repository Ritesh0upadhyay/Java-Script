const screen= document.querySelector(".screen");
let screenValue="";
runningTotal=0;
let intScreenValue=0
let lastOperator="";
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
            runningTotal=0;
            break;      
        case "=": 
            intScreenValue = parseInt(screenValue);   // Get the number user entered
            flushOperation(intScreenValue);           // Use correct value
            screenValue = runningTotal.toString();    // Show result
            runningTotal = 0;                         // Reset for next operation
            lastOperator = "";
            break;
        case "←":
            if(screenValue.length=== 1)
                {screenValue="0"}
            else{
                screenValue=screenValue.substring(0,screenValue.length-1)
            }; 
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
    if(isNaN(screenValue)){screenValue=number}
    else if(screenValue==="0"){
        screenValue=number;
    }else{
    screenValue+=number;
    }
};
function buttonValue(){
     
     document.querySelector(".calc-buttons").addEventListener("click", function(event){
        if(event.target.matches("button")){
       buttonClick(event.target.innerText)
        }
        
        else{
            return
        };
    })};
function rerendder(){
    screen.innerText=screenValue;
}
function handleMath(operator){
     intScreenValue = parseInt(screenValue);
    
  
    if (screenValue==="0"){
        return;
    }
    else if(runningTotal===0){
      
        runningTotal=intScreenValue;
    }else{
        flushOperation(intScreenValue);
    }
    
    lastOperator=operator;
    screenValue=operator;
   

}
function flushOperation(intScreenValue){
     if(lastOperator==="+"){
        runningTotal+=intScreenValue;
     }
        else if(lastOperator==="-"){ 
        runningTotal-=intScreenValue;
     } else if(lastOperator==="×"){
        runningTotal*=intScreenValue;
     } else if(lastOperator==="÷"){
        runningTotal/=intScreenValue;
     }
    console.log(runningTotal);};


buttonValue();

