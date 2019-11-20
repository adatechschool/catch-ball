function Score() {
  this.score = 0;
  //functions
  this.calcScore = function(ball, paddle) {
    if((ball.ballY + ball.ballRadius) == (canvas.height - paddle.paddleHeight) && (paddle.paddleX <= ball.ballX && ball.ballX  <= paddle.paddleX + 100)) {
      console.log("test");
      this.score += 1;
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
