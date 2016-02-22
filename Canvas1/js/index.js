//window.console.log('ready');
function draw() {
	var canvas0 = document.getElementById('prueba0');
	var canvas1 = document.getElementById('prueba1');
	var canvas2 = document.getElementById('prueba2');
	var canvas3 = document.getElementById('prueba3');
	var canvas4 = document.getElementById('prueba4');
	var canvas5 = document.getElementById('prueba5');
	//Testing canvas performance
	if (canvas0.getContext) {
		var ctx = canvas0.getContext('2d');

		ctx.fillStyle = "rgb(250,0,150)";
		ctx.fillRect(10,10,50,50);

		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);
	}
	//Drawing rectangles
	if (canvas1.getContext) {
		var ctx = canvas1.getContext('2d');

		ctx.fillRect(25,25,100,100);
		ctx.clearRect(45,45,60,60);
		ctx.strokeRect(50,50,50,50);
	}
	//Drawing paths
	if (canvas2.getContext) {
		var ctx = canvas2.getContext('2d');

		ctx.beginPath();
		ctx.moveTo(75,75);
		ctx.lineTo(100,50);
		ctx.lineTo(100,100);
		ctx.fill();
	}
	//Smiley face
	if (canvas3.getContext) {
		var ctx = canvas3.getContext('2d');

		ctx.beginPath();
		ctx.arc(75, 75, 70, 0, Math.PI*2, true);
		ctx.moveTo(125,75);
		ctx.arc(75, 75, 50, 0, Math.PI, false);
		ctx.moveTo(65,65);
		ctx.arc(55, 65, 10, 0, Math.PI*2, true);
		ctx.moveTo(105,65);
		ctx.arc(95, 65, 10, 0, Math.PI*2, true);
		ctx.stroke();

	}
	//Filled and outlined triangles
	if (canvas4.getContext) {
		var ctx = canvas4.getContext('2d');

		//Filled triangle
		ctx.beginPath();
		ctx.moveTo(25,25);
		ctx.lineTo(100, 25);
		ctx.lineTo(25, 100);
		ctx.fill();

		//Stroke triangle
		ctx.beginPath();
		ctx.moveTo(125,125);
		ctx.lineTo(125, 50);
		ctx.lineTo(50, 125);
		ctx.closePath();
		ctx.stroke();
	}
	//Quadratic Curve
	if (canvas5.getContext) {
		var ctx = canvas5.getContext('2d')

		ctx.beginPath();
		ctx.moveTo(75,75);
		ctx.quadraticCurveTo(25,25,25,62.5);
		ctx.stroke();
	}
}
window.onload = draw;
