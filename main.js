var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//valeurs pour les boutons
var rightPressed = false;
var leftPressed = false;

//autre variables
var score = 0;
var lives = 3;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//construction du Paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-11, paddleWidth, paddleHeight);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}


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

//bouton enfoncé
function keyDownHandler(e) {
  if(e.keyCode == 39 || e.keyCode == 68) {
      rightPressed = true;
  }
  else if(e.keyCode == 37 || e.keyCode == 81) {
      leftPressed = true;
  }
}

//bouton non enfoncé
function keyUpHandler(e) {
  if(e.keyCode == 39 || e.keyCode == 68) {
      rightPressed = false;
  }
  else if(e.keyCode == 37 || e.keyCode == 81) {
      leftPressed = false;
  }
}

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
  drawPaddle();
  drawScore();
  drawLives();
  //changingScore();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 4;
  }
  else if (leftPressed && paddleX > 0) {
      paddleX -= 4;
  }
}

setInterval(draw, 1);
