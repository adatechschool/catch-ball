function Paddle() {
  //Constructor
  this.paddleHeight = 10;
  this.paddleWidth = 500;
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
      if(e.key == "ArrowRight") { this.rightPressed = true; console.log(this.rightPressed)}
      if(e.key == "ArrowLeft") { this.leftPressed = true; }
    }, false);
    document.addEventListener("keyup", function(e) {
      if(e.key == "ArrowRight") { this.rightPressed = false; }
      if(e.key == "ArrowLeft") { this.leftPressed = false; }
    }, false);
  }
  this.movePaddle = function(rightPressed) {
    // console.log(this.rightPressed, this.leftPressed)
    if(this.rightPressed == true/* && this.paddleX < canvas.width-this.paddleWidth*/) {
      console.log("lala")
      this.paddleX += 4;
    }
    else if (this.leftPressed/* && this.paddleX > 0*/) {
      console.log("lolo")
      this.paddleX -= 4;
    }
  }
}
