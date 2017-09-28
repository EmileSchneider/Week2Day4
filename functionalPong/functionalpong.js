var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ball = function(x,y){
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.fill();
}
var paddle = function(x,y){
  ctx.fillStyle = "green";
  ctx.fillRect(x,y,150,25);
}


ball(100,100);
paddle(500,500)
