      
var randNumber;
var result;
var crystalValu=0;
var win=0;
var loss=0;
var numArray=[];
var sum;
var x;
var txt;
var val;

function randNumberGenerator(){
    //at game start 
    //on page load generate a random number
    //generate random between 19 to 120    

       randNumber=Math.floor(Math.random() * 102) + 19; 
        //display result on the index page
       document.getElementById("gameStart").innerHTML= randNumber;     
    
   }
   

  function getSum(total, x){

    return total + Math.round(x);
     
} 
  
//firstCrsytal function
function firstCrytsal() {
    //generate random number btw 1 to 12
    //store it var crystalValu
    
    
    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    console.log(numArray);
    /*
    function getSum(total, x){

        return total + Math.round(x);
    } 
    */   
     getSum(total, x);
     sum=numArray.reduce(getSum, 0); 
     window.value=numArray.reduce(getSum, 0); 
    document.getElementById("results").innerHTML = sum; 
    
      

}
//document.getElementById("results").innerHTML = numArray.reduce(getSum, 0); 
 

//secondCrsytal function
function secondCrytsal() {
    //generate random number btw 1 to 12
    //store it var crystalValu
    
    
    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    console.log(numArray);
    function getSum(total, x){

        return total + Math.round(x);
    }    
    sum=numArray.reduce(getSum, 0);  
    document.getElementById("results").innerHTML = sum; 
}


//thirdCrsytal function
function thirdCrytsal() {
    //generate random number btw 1 to 12
    //store it var crystalOne
    var i=0;
    
    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    console.log(numArray);
    function getSum(total, x){

        return total + Math.round(x);
    }    
    sum=numArray.reduce(getSum, 0);  
    document.getElementById("results").innerHTML = sum; 
}


//fourthCrsytal function
function fourthCrytsal() {
    //generate random number btw 1 to 12
    //store it var crystalOne
    var i=0;
    
    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    console.log(numArray);
    function getSum(total, x){

        return total + Math.round(x);
    }    
    sum=numArray.reduce(getSum, 0);  
    document.getElementById("results").innerHTML = sum; 
    
}


//console.log(randNumber);
//firstCrytsal();

 //console.log("This sum :"+ window.value);
 

    
 
//firstCrsytal function
function selectCrytsal() {
    //we want to generate random
    
    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    //sum the numbers in array
     getSum(total, x);
     sum=numArray.reduce(getSum, 0); 
     console.log(randNumber);
     //show on the page
     document.getElementById("results").innerHTML = sum; 
    if(sum > randNumber){
        //alert("it is a loss");
        loss++
       var txtt="Losses :" + loss;    
        document.getElementById("losses").innerHTML =txtt; 
        numArray=[];
        randNumberGenerator();
        document.getElementById("gameStart").innerHTML= randNumber; 
    }
    if(sum == randNumber){
        //alert ("It is a win");
        win++;
        
       var txts="Wins :" + loss;    
        document.getElementById("win").innerHTML =txts; 
        numArray=[];
        randNumberGenerator();
        document.getElementById("gameStart").innerHTML= randNumber; 
    }
    
    
      

}
//document.getElementById("results").innerHTML = numArray.reduce(getSum, 0); 
   




      
 
//checkWinLoss();
//console.log(randNumber);
 
