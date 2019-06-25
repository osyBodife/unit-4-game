      
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
    //this function on page load would generate a random number
    //generate random between 19 to 120    

       randNumber=Math.floor(Math.random() * 102) + 19; 
       txt= "Target Number : => " + randNumber;
        //display result on the index page
       document.getElementById("gameStart").innerHTML= txt;     
    
   }
   
//function to add numbers in array
  function getSum(total, x){

    return total + Math.round(x);
     
      } 
  
 
 function checkLoss(){
     //this function would check if there is a Loss
    if(sum > randNumber){
        //alert("it is a loss");
        loss++
       var txtt="Losses :" + loss;   
       //display result 
        document.getElementById("losses").innerHTML =txtt; 
        //empty the array or reset
        numArray=[];
        //call random generator to start afresh
        randNumberGenerator();
        //display random number
        document.getElementById("gameStart").innerHTML= txt;
    }
      }
    
      function checkWin (){
          //this function would check a win
          if(sum == randNumber){
                //alert("it is a win");
                //increment win by 1
                win++;
               var txts="Wins :" + win;  
               //display result  
                document.getElementById("wins").innerHTML =txts; 
                //reset that array to empty to start afresh
                numArray=[];
                //call random number function to  start afresh
                randNumberGenerator();
                //display result
                document.getElementById("gameStart").innerHTML= txt;
           
        }
    }
//firstCrsytal function
function selectCrytsal() {
    //this function on the click of the crystals would generate a random number
    //this math function would generate a random number btw 1 and 12

    crystalValu=Math.floor(Math.random()*12) +1;  
    //add the value to the empty array
    numArray.push(crystalValu); 
    //sum the numbers in array
     getSum(total, x);
     sum=numArray.reduce(getSum, 0); 
     //console.log(randNumber);
     //display result
     document.getElementById("results").innerHTML = sum; 
     //call the the loss and win functions
     checkLoss();
     checkWin ();  
    
    //end

}





