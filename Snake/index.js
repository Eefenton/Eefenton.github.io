/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 10;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var KEY = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
      ENTER: 13,
  };

   var boardWidth = $('#board').width();
  var boardHeight = $('#board').height();

  // Game Item Objects
  var snake = [$('#snakeHead')];
  var apple = $('#apple');

  // one-time setup
  snake[0].x = 0;
  snake[0].y = 0;
  snake[0].speedX = 10;
  snake[0].speedY = 10;

  apple.x = 100;
  apple.y = 100;
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)                        // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', handleKeyDown);     
  $(document).on('keyup', handleKeyUp);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.RIGHT) {
           console.log("RIGHT");
           snake[0].speedX = 5;
    }
    if (event.which === KEY.LEFT) {
           console.log("LEFT");
           snake[0].speedX = -5;
    }
    if (event.which === KEY.DOWN) {
           console.log("DOWN");
           snake[0].speedY = 5;
    }
    if (event.which === KEY.UP) {
           console.log("UP");
           snake[0].speedY = -5;
    }
  }
   function handleKeyUp(event) {
      if (event.which === KEY.RIGHT) {
          snake[0].speedX = 0;
      }
      if (event.which === KEY.LEFT) {
          snake[0].speedX = 0
      }
      if (event.which === KEY.DOWN) {
          snake[0].speedY = 0
      }
      if (event.which === KEY.UP) {
          paddle2.speedY = 0
      }
    }
  function handleEvent(event) {

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
  
}
