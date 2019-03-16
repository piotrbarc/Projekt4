
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
/*ctx.beginPath();


ctx.arc(50, 30, 20, 0, 2 * Math.PI);
ctx.fillStyle = '#ff0000';
ctx.fill();
ctx.stroke(); 
*/

// creating ball
class Ball
{
    constructor(cordX, cordY, color)
    {
this.cordX = cordX;
this.cordY= cordY;
this.color = color;

    }

// drawing ball in canvas 
    drawBall()
    {
    this.ctx.beginPath();
    this.ctx.arc(this.cordX, this.cordY, 20, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke(); 
    }
}
//let ball1 = new Ball(50, 50, "#e74c3c");

let ball1 = new Ball(60, 60, '#ff0000');




ctx.arc(50, 30, 20, 0, 2 * Math.PI);
ctx.fillStyle = '#ff0000';
ctx.fill();
ctx.stroke(); 

