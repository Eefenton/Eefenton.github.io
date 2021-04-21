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
  snake[0].speedX = 0;
  snake[0].speedY = 0;
  snake[0].id = $('#snakeHead');

  apple.x = 0;
  apple.y = 0;
  apple.id = $('#apple');


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

// moves but does not redraw //
 function moveObject(objects){
  
 objects.y += objects.speedY
 objects.x += objects.speedX
 }

 // redraws elements //
 function updatePosition(objects) {
  $(snake[0].id).css("left", snake[0].x)
  $(snake[0].id).css('top', snake[0].y)
 }

  function newFrame() {
    moveObject(snake[0]);
 updatePosition(snake[0]);

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.RIGHT) {
           console.log("RIGHT");
           snake[0].speedX = 20;
           snake[0].speedY = 0;
    }
    if (event.which === KEY.LEFT) {
           console.log("LEFT");
           snake[0].speedX = -20;
           snake[0].speedY = 0;
    }
    if (event.which === KEY.DOWN) {
           console.log("DOWN");
           snake[0].speedY = 20;
           snake[0].speedX = 0;
    }
    if (event.which === KEY.UP) {
           console.log("UP");
           snake[0].speedY = -20;
           snake[0].speedX = 0;
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
