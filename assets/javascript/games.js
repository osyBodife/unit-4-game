      
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
     //at game start both wins & loss==0
     //generate random between 19 to 120
     if (win==0 && loss==0){       

        randNumber=Math.floor(Math.random() * 102) + 19; 
        return randNumber; 
        //console.log(randNumber);   
   //randNumberGenerator(); 
   //txt= "  " + " " + randNumber;
  // document.getElementById("gameStart").innerHTML= randNumber; 
  
     }   
     
    }
    document.getElementById("gameStart").innerHTML="Target Score :" + randNumberGenerator(); 
  //create function to check or loss

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
     
    document.getElementById("results").innerHTML = sum; 
      

}
// document.getElementById("results").innerHTML = numArray.reduce(getSum, 0); 
 

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


console.log(randNumber);
//firstCrytsal();

 //console.log("This sum :"+ window.value);

 function checkWinLoss(){   
    var val = document.getElementById("results").value;
    
       document.getElementById("wins").innerHTML = val;
       //console.log(val); 
   
      
 }
 //checkWinLoss();
 //console.log(val); 
