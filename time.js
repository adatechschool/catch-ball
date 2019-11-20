var counter = 90;
var intervalId = null;
//check if launched
var check = false;

function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";
  //alert("temps écoulé!!!");
  check = false;
}

function bip() {
	counter--;
	if(counter < 0) {
    finish();
  }
	else {
		document.getElementById("bip").innerHTML = counter + " secondes restantes";
	}
}

function start() {
  if (check == false) {
    check = true;
    intervalId = setInterval(bip, 1000);
  }
}
