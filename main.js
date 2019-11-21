// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();
var counter = 500;


var arr = [];
arr.push(new Ball());
arr.push(new Ball());
arr.push(new Ball());


paddle.movement();
drawTime = function() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Temps restant : " + counter, 10, 45);
}

function draw() {
  paddle.movePaddle();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr[0].drawBall();
  arr[0].moveBall();
  arr[1].drawBall();
  arr[1].moveBall();
  arr[2].drawBall();
  arr[2].moveBall();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  score.calcScore(ball, paddle);
  // drawTime();
  // counter -= 1;
  // console.log(counter)
  // if(counter == 0) {
	//   alert("It's a wiiin ! ");
	//   document.location.reload();
	//   counter == 500
  // }
}

setInterval(draw);
