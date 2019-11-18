//autre variables
var score = 0;
var lives = 3;

// function changingScore() {
//   if(y + dy > canvas.height-1) {
//     if(x > paddleX && x < paddleX + paddleWidth) {
//       score++;
//     }
//     else {
//       lives--;
//       if(!lives) {
//         alert("GAME OVER");
//         document.location.reload();
//       }
//     }
//   }
// }
Paddle.prototype.listen = function() {
  window.addEventListener("keydown", keyDownHandler().bind(this.movePaddle()), false);/*=Paddle*/
  window.addEventListener("keyup", keyUpHandler().bind(this.movePaddle()), false);/*=Paddle*/
}
// paddle.keyDownHandler();
// paddle.keyUpHandler();


function drawScore() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Score: " + score, 10, 20);
}

function drawLives() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Lives: " + lives, 10, 40);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  drawScore();
  drawLives();
  //changingScore();
  paddle.movePaddle();
}
setInterval(draw, 1);
