window.onload = function(){

	var canvas = document.getElementById("canvas");

	var context = canvas.getContext("2d");

	var w = 500, h = 500;

	context.rect(150, 150, 10, 10);
	context.rect(300, 300, 20, 20);
	context.rect(0, 450, 30, 30);
	context.fillStyle = 'blue';
	
	context.fill();

	function drawVertLines(){
		for (var x = 10; x < w; x+=10){
			context.moveTo(x,0);
			context.lineTo(x,h);

		}
	}

	function drawHorizLines(){
		for (var y = 10; y < h; y+=10){
			context.moveTo(0,y);
			context.lineTo(w,y);

		}
	}

	function init(){
		drawVertLines();
		drawHorizLines();
	}

	init();

	context.strokeStyle = 'red';
	context.stroke();


};