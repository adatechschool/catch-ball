function Paddle() {
  //Constructor
  this.paddleHeight = 10;
  this.paddleWidth = 100;
  this.paddleX = (canvas.width - this.paddleWidth) / 2;
  this.paddleY = canvas.height - this.paddleHeight;
  this.paddleSpeed = 5;
  this.rightPressed = false; //right arrow
  this.leftPressed = false; //left arrow
  //functions
  this.drawPaddle = function() {
    ctx.beginPath();
    ctx.rect(this.paddleX, this.paddleY,this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }
  this.movement = function() {
    document.addEventListener("keydown", function(e) {
      if(e.key == "ArrowRight") { this.rightPressed = true; movePaddle(this.rightPressed)}
      if(e.key == "ArrowLeft") { this.leftPressed = true; }
    }, false);
    document.addEventListener("keyup", function(e) {
      if(e.key == "ArrowRight") { this.rightPressed = false; movePaddle(this.rightPressed)}
      if(e.key == "ArrowLeft") { this.leftPressed = false; }
    }, false);
  }
  movePaddle = function(rightPressed, leftPressed) {
    // console.log(rightPressed)
    // console.log(this.rightPressed, this.leftPressed)
    if(rightPressed == true/* && this.paddleX < canvas.width-this.paddleWidth*/) {
      this.paddleX += 4;
    }
    else if (this.leftPressed/* && this.paddleX > 0*/) {
      this.paddleX -= 4;
    }
  }
}
