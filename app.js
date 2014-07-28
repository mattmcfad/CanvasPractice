window.onload = function(){

	var canvas = document.getElementById("canvas");

	var context = canvas.getContext("2d");

	var w = 500, h = 500, cellSize = 50;

	function drawVertLines(){
		for (var x = cellSize; x < w; x+=cellSize){
			context.moveTo(x,0);
			context.lineTo(x,h);
		}
		context.stroke();
	}

	function drawHorizLines(){
		for (var y = cellSize; y < h; y+=cellSize){
			context.moveTo(0,y);
			context.lineTo(w,y);
		}
		context.stroke();
	}

	function drawCircles(){
		
		for (var pos = 0; pos < w/cellSize; pos++ ){
			
			context.beginPath();

			var x          = cellSize/2 + pos*cellSize;
			var y 	       = cellSize/2;
			var radius     = 22.5;
			var startAngle = 0;
			var endAngle   = Math.PI*2;
			var clockwise  = true;

			context.arc(x,y,radius,startAngle,endAngle,clockwise);
			
			context.fillStyle = 'green';
			context.fill();

		}
		
	}

	function drawSquares() {

		context.beginPath();

		context.rect(150, 150, 10, 10);
		context.rect(300, 300, 20, 20);
		context.rect(0, 450, 30, 30);
		context.fillStyle = 'blue';
		
		context.fill();

	}

	function init(){
		
		drawVertLines();
		drawHorizLines();
		drawCircles();
		drawSquares();
		
	}

	init();

	context.strokeStyle = 'red';
	context.stroke();


};