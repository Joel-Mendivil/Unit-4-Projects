"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Joel Mendivil
   Date: 3/12/20  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

//Steps 4 a-f
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";   

//Step 5
window.onload = init();

//Step 6
function init(e) {
   //Set up initial conditions of the puzzle
   allLetters = document.querySelectorAll("table#crossword span")
   currentLetter = allLetters[0];
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);

   //Step 8a
   formatPuzzle(currentLetter);
   //Step 8b (Select a puzzle cell using a mouse)
   for(var i = 0; i < allLetters.length; i++){
      //Step 8b i
       allLetters[i].style.cursor = "pointer";
       //Step 8b ii
       allLetters[i].onmousedown = function(e){
           formatPuzzle(e.target);
       }
   }

   //Step 10
   document.addEventListener("keydown", selectLetter);

   //Step 12a (Change typing direction)
   var typeImage = document.getElementById("directionImg");

   //Step 12b
   typeImage.style.cursor = "pointer";

   //Step 12c
   typeImage.onclick = switchTypeDirection;

   //Step 13
   document.getElementById("showErrors").onclick = function(){
      //Steps 13a (Run show errors)
      for(var i = 0; i < allLetters.length; i++){
         if(allLetters[i].textContent !== allLetters.dataset.letter.value){
            allLetters[i].style.color = "red";
         }
      }
      //Steps 13b (Remove the hints after 3 seconds)
      setTimeout(function(){}, 3000);
   }
   
   //Step 14 (Shows Solution)
   document.addEventListener("click", function(){
       for(var i = 0; i < allLetters.length; i++){
           allLetters.textContent = allLetters.dataset.letter.value;
       }
   });
}

//Step 7
function formatPuzzle(puzzleLetter){

   //Step 7a
   currentLetter = puzzleLetter

   //Step 7b
   for(var i = 0; i < allLetters.length; i++){
      allLetters[i].style.backgroundColor = "";
   }
   //Step 7c
   acrossClue.style.color = "";
   downClue.style.color = "";

   //Step 7d
   if(currentLetter.dataset.clueA !== undefined){

      //Step 7d i
      acrossClue = document.getElementById("currentLetter.dataset.clueA")

      //Step 7d ii
      acrossClue.style.color = "blue";

      //Step 7d iii
      wordLetters = "[data-clue-A = " + data-clue-a.value + "]";

      //Step 7d iv
      wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
   }

   //Step 7e
   if(currentLetter.dataset.clueD !== undefined){
      downClue = document.getElementById("currentLetter.dataset.clueD")
      downClue.style.color = "red";
      wordLetters = "[data-clue-D = " + data-clue-d.value + "]";
      wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
   }

   //Step 7f
   if(typeDirection === "right"){
      currentLetter.style.color = "rgb(191, 191, 255)";
   }
   else{
      currentLetter.style.color = "rgb(255, 191, 291)";
   }
}

//Step 9
function selectLetter(e) {

   //Step 9a
   var leftLetter = document.getElementById(currentLetter.dataset.left);
   var upLetter = document.getElementById(currentLetter.dataset.up);
   var rightLetter = document.getElementById(currentLetter.dataset.right);
   var downLetter = document.getElementById(currentLetter.dataset.down);

   //Step 9b
   var userKey = e.keyCode;

   //Step 9c i
   if(userKey === 37){
      formatPuzzle(leftLetter);
   }
  

 //Step 9c ii
   if(userKey === 38){
        formatPuzzle(upLetter);
   }

   //Step 9c iii
   else if(userKey === 39 || 9){
        formatPuzzle(rightLetter);
   }

   //Step 9c iv
   else if(userKey === 40 || 13){
        formatPuzzle(downLetter);
   }

   //Step 9c v
   else if(userKey === 8 || userKey === 46){
       currentLetter.textContent = "";
   }

   //Step 9c vi
   else if(userKey === 32){
      switchTypeDirection();
   }

   //Step 9c vii
   else if(userKey >= 65 && userKey <= 90){
      currentLetter.textContent = getChar(userKey);
      if(typeDirection === "right"){
         formatPuzzle(rightLetter);
      }
      else{
         formatPuzzle(downLetter);
      }
   }

   //Step 9d
   preventDefault();
}

//Step 11
function switchTypeDirection(){
   //Step 11a
   var typeImage = document.getElementById("directionImg");
   //Step 11b and c
   if(typeDirection === "right"){
	 typeDirection = "down";
       typeImage.style.src = "pc_right.png";
       currentLetter[i].style.backgroundColor = "rgb(255, 191, 191)";
   }
   else{
       typeDirection = "right";
       typeImage.style.src = "pc_down.png";
       currentLetter.style.backgroundColor = "rgb(191, 191, 255)"; 
   }
}
/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
