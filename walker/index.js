/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var KEY = {
  "ArrowDown": 40,
  "ArrowUp": 38,
  "ArrowLeft": 37,
  "ArrowRight": 39, 
}
  // Game Item Objects
var positionX = 0;
var speedX = 0;
var positionY = 0;
var speedY = 0; 

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);   
   $(document).on('keyup', handleKeyUp);                        // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

       if (event.which === KEY.ArrowDown) {
           console.log("ArrowDown");
           speedY = 5;
       }
       if (event.which === KEY.ArrowLeft) {
           console.log("ArrowLeft")
           speedX = -5;
       }
       if (event.which === KEY.ArrowRight) {
           console.log("ArrowRight")
           speedX = 5;
       }
       if (event.which === KEY.ArrowUp) {
           console.log("ArrowRight")
           speedY = -5;
           
       }
    }
  function handleKeyUp(event) {
      if (event.which === KEY.ArrowDown) {
          speedY = 0;
      }
      if (event.which === KEY.ArrowLeft) {
          speedX = 0;
      }
      if (event.which === KEY.ArrowRight) {
          speedX = 0;
      }
      if (event.which === KEY.ArrowUp) {
          speedY = 0;
      }
    }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem() {
     positionX += speedX;
     positionY += speedY;
    }

 function redrawGameItem() {
     $("#box").css("left", positionX);
     $("#box").css("top", positionY);
    }
}
