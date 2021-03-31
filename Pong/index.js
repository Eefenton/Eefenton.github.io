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
  function factory ($id){
  var object = {};
  
  object.id = $id; 
  object.x = parseFloat($($id).css('left'));
  object.y = parseFloat($($id).css('top'));
  object.width = $($id).width();
  object.height = $($id).height();
  object.speedX = 0
  object.speedY = 0
  return object;

      return newObject;
  }
  
 // creating objects //
  var paddle1 = factory("#paddle1");
  var paddle2 = factory("#paddle2");
  var ball = factory("#ball");
  var scorePaddle1 = ("#scorePaddle1");
  var scorePaddle2 = ("#scorePaddle2");

  // assigning default speeds //
 ball.speedY = (Math.round(Math.random()) * 6) - 3;
 ball.speedX = (Math.round(Math.random()) * 6) - 3;


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
  
 objects.y += objects.speedY
 objects.x += objects.speedX
 }
 // redraws the object after being moved
 function updatePosition(objects) {
  $(ball.id).css("left", ball.x)
  $(ball.id).css('top', ball.y)
  $(paddle1.id).css("top", paddle1.y)
  $(paddle2.id).css("top", paddle2.y)
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
    // handle paddle/wall collisions
    if (checkPaddleColliion(paddle1)) {
        paddle1.y -= paddle1.speedY 
        paddle1.speedY = 0
    }
    if(checkPaddleColliion(paddle2)) {
       paddle2.y -= paddle2.speedY 
       paddle1.speedY = 0
    }
   // tracks whether ball is touching paddles
    if (doCollide(ball, paddle1)) {
        ball.speedX += 1.05
        ball.speedY = (Math.round(Math.random()) * 6) - 3;
    } else {
        ball.speedX = ball.speedX
    }
    if (doCollide(ball, paddle2)) {
        ball.speedX += -1.05
        ball.speedY = (Math.round(Math.random()) * 6) - 3;
    } else {
        ball.speedX = ball.speedX
    }
    // track ball/floor collisions //
    if (ball.y > boardHeight) {
       ball.speedY = -ball.speedY
    }
    if (ball.y < 0) {
       ball.speedY = -ball.speedY
    }
    if (ball.x > boardLength) {
        scorePaddle1 + 1
    }
     if (ball.x < 0) {
        scorePaddle1 + 1
    }
  }
  
  /* 
  Called in response to events.
  */
         //paddle controls//
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
      if (event.which === KEY.DOWN) {
          paddle2.speedY = 0
      }
      if (event.which === KEY.UP) {
          paddle2.speedY = 0
      }
    }
    

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  // collision functions
  function doCollide(obj1, obj2) {
        // sides of the square1
    obj1.leftX = obj1.x;
    obj1.topY = obj1.y;
    obj1.rightX = obj1.x + obj1.width;
    obj1.bottomY = obj1.y + obj1.height; 
    
    // sides of the square2
    obj2.leftX = obj2.x;
    obj2.topY = obj2.y;
    obj2.rightX = obj2.x + obj2.width;
    obj2.bottomY = obj2.y + obj2.height
  
    // TODO: Return true if they are overlapping, false otherwise
    if (obj1.leftX < obj2.rightX &&
        obj1.rightX > obj2.leftX && 
        obj1.topY < obj2.bottomY &&
        obj1.bottomY > obj2.topY) {
       return(true);
    }
    else {
      return(false);
    }
  }
  // check for paddle collision //
  function checkPaddleColliion (obj) {
         // top and bottom of paddle //
         obj.topY = obj.y;
         obj.bottomY = obj.y + obj.height; 
         // return true if overlapping with border 
         if (obj.topY < 0 || obj.bottomY > boardHeight){
             return true;
         }
         else {
             return false;
         }
  }






  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}