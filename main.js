// paddle.keyDownHandler();
// paddle.keyUpHandler();
//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)
var paddle = new Paddle();
var score = new Score();
var counter = 500;

var arrIterator = 0;

var arr = [];
arr.push(new Ball(1000));
arr.push(new Ball(500));
arr.push(new Ball(0));



drawTime = function() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Temps restant : " + counter, 10, 45);
}

function draw() {
  paddle.movement();
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
  score.calcScore(arr[0], paddle);
  score.calcScore(arr[1], paddle);
  score.calcScore(arr[2], paddle);
  drawTime();
  //console.log(counter)
  // counter -= 1;
  // if(counter == 0) {
	//   console.log("end")
	//   document.location.reload();
	//   counter == 500
  // }
}

setInterval(draw, 3);
