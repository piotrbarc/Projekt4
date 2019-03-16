
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');


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
    ctx.beginPath();
    ctx.arc(this.cordX, this.cordY, 25, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke(); 
    }
}

let balls = [];
// draw random balls on canvas and add them to array 'balls'
for(let i =0 ;i < 12 ; i++)
{
let random = Math.floor(Math.random()*100);
let random2 = Math.floor(Math.random()*100);

 let NewBall = new Ball(5*random, 10*random2 , 'red');
 NewBall.drawBall();
balls.push(NewBall);
}


