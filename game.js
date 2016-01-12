/* Keyboard Handling */

function keyboard () {
    this.keyStateArr = [];
    this.wasPressedArr = [];
}

var myKeyb;

function keyMode () {
    myKeyb = new keyboard();
  for (var i = 128 - 1; i >= 0; i--) {
    myKeyb.keyStateArr[i]=false;
    myKeyb.wasPressedArr[i]=false;
  }
}
function getKeyState (keyCode) {
  result = myKeyb.keyStateArr[keyCode] == true? true:  myKeyb.wasPressedArr[keyCode]== true ? true: false;
  myKeyb.wasPressedArr[keyCode]= false;
  return result;
}

function currKeyState (keyCode) {
  return myKeyb.keyStateArr[keyCode];
}

function keyDownHandler (evt) {
      if (evt.keyCode == 27 ) {
        window.close();
      };
      myKeyb.keyStateArr[evt.keyCode]=true;
      myKeyb.wasPressedArr[evt.keyCode]=true; 
}
function keyUpHandler (evt) {
        myKeyb.keyStateArr[evt.keyCode]=false;
        
}

window.onkeydown = function(evt) {keyDownHandler(evt)};
window.onkeyup = function(evt) {keyUpHandler(evt)};
keyMode();


/* Handling the Mouse */
var customCursor = false;
var customCursorLink;
var nameCanvas;
var cursorVisible = true;
var mousePos = {x:0,y:0};



function showMouseCursor(canvasName){
  if( customCursor ){
      document.getElementById(canvasName).style.cursor = url(customCursorLink);
  }
  else {
    document.getElementById('nocursor').style.cursor = auto;
  }
  cursorVisible = true;
}

function hideMouseCursor(canvasName){
  document.getElementById(canvasName).style.cursor = none;
  cursorVisible = false;
}

function getMousePosition(canvasName, evt) {
  var rect = canvasName.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function mouseMovementTracker(evt){
  mousePos = getMousePos(canvas, evt);
}


