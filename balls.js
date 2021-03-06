function Ball() {
  //constructor
  this.ballX = Math.floor((Math.random() * canvas.width));
  this.ballY = 0;
  this.dropSpeed = Math.random()*3.5 + 1.0;
  this.ballColor = "#"+((1<<24)*Math.random()|0).toString(16);
  this.ballRadius = 10;
  //ball functions
  this.drawBall = function() {
    ctx.beginPath();
    ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = this.ballColor;
    ctx.fill();
    ctx.closePath();
  }
  this.moveBall = function() {
    this.ballY += this.dropSpeed;
    if (canvas.height + this.ballRadius < this.ballY) {
        this.ballY = 0;
        this.dropSpeed = Math.random()* 3.5 + 1.0;
        this.ballX = Math.floor((Math.random() * canvas.width));
        this.ballColor = "#"+((1<<24)*Math.random()|0).toString(16);
    }
  }
}
