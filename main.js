// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();
var counter = 500;

paddle.movement();

drawTime = function(counter) {
  console.log(counter)
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Temps restant : " + counter, 10, 45);
}

function draw() {
  movePaddle();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  score.calcScore(ball, paddle);
  counter -= 1;
  drawTime(counter);
  if(counter == 0) {
	  alert("It's a wiiin ! ");
	  document.location.reload();
	  counter == 500;
  }
}

setInterval(draw);
