const screen= document.querySelector(".screen");
let screenValue="";
runningTotal=0;
let intScreenValue=0;
let lastOperator=null;
function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleOperator(value);
    }
    else{
        handleNumber(value);  
    }
    //to update the screen after the button is clicked everytime.
    rerendder();
};
function handleOperator(operator){
    switch(operator){
        case "C":
            
            screenValue="0";
            runningTotal=0;
            break;      
        case "=": 
            intScreenValue = parseInt(screenValue);   
            flushOperation(intScreenValue);   
            // to show the result after each step on screen 
              
            screenValue = runningTotal.toString();   
            console.log(screenValue); 
            runningTotal = 0;                       
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
    //to check if the previous screen value is a operator so instead of appending the screen shows the 
    //new number entered and the calculation can continue otherwise we will see NAn as the operator is multiplied with number.
    if(isNaN(parseInt(screenValue))){screenValue=number}
    else if(screenValue==="0"){
        screenValue=number;
    }else{
    screenValue+=number;
    }
};
function buttonValue(){
     
     document.querySelector(".calc-buttons").addEventListener("click", function(event){
        //to check if the clicked element is a button or the click is done from the intersection
        //of two of three buttons.
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
    //For showing the operator on the screen when user clicks on a operator.
    screenValue=operator;
   

}
function flushOperation(intScreenValue){
    
    if(lastOperator===null||lastOperator==="="||lastOperator==="" ){
        runningTotal=intScreenValue;
    }
     else if(lastOperator==="+"){
        runningTotal+=intScreenValue;
     }
        else if(lastOperator==="-"){ 
        runningTotal-=intScreenValue;
     } else if(lastOperator==="×"){
        runningTotal*=intScreenValue;
     } else if(lastOperator==="÷"){
        runningTotal/=intScreenValue;
     }
    };


buttonValue();

