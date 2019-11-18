      var canvas = document.createElement("myCanvas");
      var ctx = canvas.getContext("2d");
      canvas.width = 1250;
      canvas.height = 600;
      ctx.fillStyle = #333333;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      document.body.appendChild(myCanvas);
      

			//valeurs pour le paddle
			var paddleHeight = 10;
			var paddleWidth = 100;
			var paddleX = (canvas.width-paddleWidth) / 2;

			//valeurs pour la balle
			var x = canvas.width/2;
			var y =0 ;
			var dx = 0;
			var dy = 2;

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

			//construction de la balle
			function drawBall() {
				ctx.beginPath();
				ctx.arc(x, y, 10, 0, Math.PI*2);
				ctx.fillStyle = "#ffffff";
				ctx.fill();
				ctx.closePath();
				x += dx;
				y += dy;
        //remet la balle en haut
        if (canvas.height == y) {
            y = 0 
        }
      }
      
      function changingScore() {

