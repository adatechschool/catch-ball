// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();


paddle.listen();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.listen();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  paddle.movePaddle();
  score.calcScore(ball, paddle);
}

setInterval(draw, 1);
