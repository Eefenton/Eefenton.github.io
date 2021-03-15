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
      UP: 38,
      DOWN: 40,
      W: 87,
      S: 83,
      ENTER: 13,
  };

  var boardWidth = $('#board').width();
  var boardHeight = $('#board').height();

  // Game Item Objects
  function factory($id){
      var newObject = {
          id: $id,
          x: 20,
          y: 20,
          speedX: 0,
          speedY: 0
      }

      return newObject;
  }
  
 // creating objects //
  var paddle1 = factory("#paddle1");
  var paddle2 = factory("#paddle2");
  var ball = factory("#ball");
  

  // assigning default speeds //
 ball.speedX = 1,

  console.log(ball);
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);     
  $(document).on('keyup', handleKeyUp);           
   // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 // makes it move but does not redraw
 function moveObject(objects){
  objects.speedY
  objects.y
 ball.x += ball.speedX
 paddle1.y += paddle1.speedY
 }
 // redraws the object after being moved
 function updatePosition(objects) {
  $(ball.id).css("left", ball.x)
  $(paddle1.id).css("top", paddle1.y)
 }
  
  function newFrame() {
    //updateposition
// paddle1 
 moveObject(paddle1);
 updatePosition(paddle1);
 //paddle2
 moveObject(paddle2);
 updatePosition(paddle2);
 //ball
 moveObject(ball);
 updatePosition(ball);
    // handle collisions
    
    // TEMPORARY handles ball/wall collision
if (ball.x > boardWidth) {
    ball.speedX = -ball.speedX;
 }
if (ball.x < 0) { 
    ball.speedX = -ball.speedX; 
 }
   
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.S) {
           console.log("S");
           paddle1.speedY = 5;
    }
    if (event.which === KEY.W) {
           console.log("W");
           paddle1.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
           console.log("DOWN");
           paddle2.speedY = 5;
    }
    if (event.which === KEY.UP) {
           console.log("UP");
           paddle2.speedY = -5;
    }
  }
   function handleKeyUp(event) {
      if (event.which === KEY.S) {
          paddle1.speedY = 0;
      }
      if (event.which === KEY.W) {
          paddle1.speedY = 0
      }
    }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  // collision functions
  function doCollide(obj1, obj2) {
      if (obj1.x = obj2.x) {
          doCollide = true
      }
      if (doCollide = true) {
          console.log ("collision!");
      }
      if (doCollide(paddle1, ball)) {
          ball.speedX = -ball.speedX
      }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}