function Paddle() {
  //Constructor
  this.paddleHeight = 10;
  this.paddleWidth = 100;
  this.paddleX = (canvas.width - this.paddleWidth) / 2;
  this.paddleY = canvas.height - this.paddleHeight;
  this.paddleSpeed = 5;
  this.righPressed = false; //right arrow
  this.leftPressed = false;
  //functions
  this.drawPaddle = function() {
    ctx.beginPath();
    ctx.rect(this.paddleX, this.paddleY,this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }
  this.takeInput = function() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
  }
  this.keyDownHandler = function(e) {
    if(e.keyCode == 39) { rightPressed = true; }
    if(e.keyCode == 37) { leftPressed = true; }
  }
  this.keyUpHandler = function(e) {
    if(e.keyCode == 39) { rightPressed = false; }
    if(e.keyCode == 37) { leftPressed = false; }
  }
}

var paddle = new Paddle();
