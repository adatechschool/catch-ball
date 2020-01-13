// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var paddle = new Paddle();
var score = new Score();

var ballAmount = 20;

var arr = [];
for(i = 0; i < ballAmount; i++) {
  arr.push(new Ball());
}


paddle.movement();
drawTime = function() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Temps restant : " + counter, 10, 45);
}

function draw() {
  paddle.movePaddle();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < arr.length; i++) {
    arr[i].drawBall();
    arr[i].moveBall();
  }
  paddle.drawPaddle();
  for(i = 0; i < arr.length; i++) {
    score.calcScore(arr[i], paddle);
  }
  score.drawScore();
}

setInterval(draw);
