// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();
var counter = 500;


drawTime = function() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  //ctx.fillText("Temps restant : " + counter, 10, 45);
}

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
  drawTime();
  console.log(counter)
  counter -= 1;
  if(counter < 0) {
	  alert("It's a wiiin ! ");
	  document.location.reload();
	  counter = 500;
  }
}

setInterval(draw, 1);
