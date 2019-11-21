function Paddle() {
  //Constructor
  this.paddleHeight = 10;
  this.paddleWidth = 150;
  this.paddleX = (canvas.width - this.paddleWidth) / 2;
  this.paddleY = canvas.height - this.paddleHeight;
  this.paddleSpeed = 5;
  var rightPressed = false; //right arrow
  var leftPressed = false; //left arrow
  //functions
  this.drawPaddle = function() {
    ctx.beginPath();
    ctx.rect(this.paddleX, this.paddleY,this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }
  this.movePaddle = function() {
    // console.log(this.rightPressed, this.leftPressed)
    if(rightPressed == true && this.paddleX < canvas.width-this.paddleWidth) {
      this.paddleX += 4;
    }
    else if (leftPressed && this.paddleX > 0) {
      this.paddleX -= 4;
    }
  }
  this.movement = function() {
    document.addEventListener("keydown", function(e) {
      if(e.key == "ArrowRight") { rightPressed = true; console.log(rightPressed)}
      if(e.key == "ArrowLeft") { leftPressed = true; }
    }, false);
    document.addEventListener("keyup", function(e) {
      if(e.key == "ArrowRight") { rightPressed = false; }
      if(e.key == "ArrowLeft") { leftPressed = false; }
    }, false);
  }
}
