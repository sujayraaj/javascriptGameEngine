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

