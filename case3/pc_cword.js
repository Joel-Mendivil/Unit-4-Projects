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

var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";   

window.onload = init();

function init(){
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   var acrossID = ;
   var downID = ;
   acrossClue = document.getElementById("acrossID");
   downClue = document.getElementById("downID");
}

function formatPuzzle(puzzleLetter){
   currentLetter = puzzleLetter;
   for(var i = 0; i < allLetters.length; i++){
      acrossClue.style.backgroundColor = "";
      downClue.style.backgroundColor = "";
   }
   acrossClue[i].style.color = "";
   downClue[i].style.color = "";
   if(currentLetter.dataset.clueA !== "undefined"){
      acrossClue = document.getElementById("currentLetter.dataset.clueA");
      acrossClue.style.color = "blue";
      wordLetters = "[data-clue-A = " +  + "]";
      wordLetters.style.backgroundColor = "rgb(231, 231, 255)";
   }
   else if(currentLetter.dataset.clueA !== "undefined"){
      acrossClue = document.getElementById("currentLetter.dataset.clueA");
      acrossClue.style.color = "blue";
      wordLetters = "[data-clue-A = " +  + "]";
      wordLetters.style.backgroundColor = "rgb(231, 231, 255)";
   }
   if(typeDirection === "right"){
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }
   else(typeDirection !== "right"){
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
