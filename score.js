function Score() {
  this.score = 0;
  //functions
  this.calcScore = function(ball, paddle) {
    ball.ballY = Math.trunc(ball.ballY);
    if((ball.ballY + ball.ballRadius) == (canvas.height - paddle.paddleHeight) && (paddle.paddleX <= ball.ballX && ball.ballX  <= paddle.paddleX + paddle.paddleWidth)) {
      this.score += 1;
      this.ballY = 0 + ball.ballRadius;
      this.dropSpeed = Math.random()* 3.5 + 1.0;
      this.ballX = Math.floor((Math.random() * canvas.width));
      this.ballColor = "#"+((1<<24)*Math.random()|0).toString(16);
      // console.log("test")
    }
  }
  this.drawScore = function() {
    ctx.font = "16px Times";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: " + this.score, 10, 20);
  }
}

// function changingScore() {
//   if(y + dy > canvas.height-1) {
//     if(x > paddleX && x < paddleX + paddleWidth) {
//       score++;
//     }
//   }
// }
