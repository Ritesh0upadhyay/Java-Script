// console.clear();
// console.log("Is this correct the clear function is working");
// console.log("Hello workd tis is isn't me mate it's just what we want\" to check the code")
// console.log("Now checking what comes when we swant to have \\ in the code")
// const numberOfTimesRepeat = 10;
// const character ="😁";
// for(i=0;i<numberOfTimesRepeat;i++)
//     {
//      console.log("Added one char"+character);
//      console.log(character.repeat(i+1));
//     }


//  shift and unshift methode in array {Shift removes first element of array and unshift adds element at the start of array}
    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // arr.unshift(67)   //
    // console.log(arr);
    // arr.unshift(54,34,3);
    // arr.shift();
    // console.log(arr);

    // Document Object Model (DOM) Manipulation Example
    // const object= document.getElementsByClassName(".square");
    // object.style.backgroundColor="cyan";
    let object= document.querySelector(".firstButton");
    console.log(object);
    object.addEventListener("click",function(){
        alert("Button Clicked");
        let square= document.querySelector(".square");
        console.log(square);
       square.style.backgroundColor="cyan";
        bigSquare= document.querySelector(".bigSquare");
        bigSquare.style.width="200px";
        bigSquare.style.height="200px";
        bigSquare.style.backgroundColor="black";
        input=document.querySelector("input");
        input.placeholder="Enter the color that you want in the box above";
        input.addEventListener("input",function(){
        bigSquare.style.backgroundColor=input.value;
        
    })});
    