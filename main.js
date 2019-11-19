// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();

paddle.movement();

function draw() {
  movePaddle();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  score.calcScore(ball, paddle);
}


setInterval(draw, 1);
