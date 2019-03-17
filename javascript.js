
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
let randomsX =[];
let randomsY =[];

// draw random balls on canvas and add them to array 'balls'
for(let i =0 ;i < 10 ; i++)
{
    //random balls only inside canvas
let random = Math.floor(Math.random() * 500) + 50;
let random2 = Math.floor(Math.random() * 750) + 50;


//if any random ball has collision with another ball , get a new random ball 
while(randomsX.includes(random ) || randomsY.includes(random2) )
{
    random = Math.floor(Math.random() * 500) + 50;
    random2 = Math.floor(Math.random() * 750) + 50;
    
}


// push random cords  to array to avoid collision (+30 radius)

for(let l = 0 ; l <30 ; l++ )
{
randomsX.push(random + l);
randomsX.push(random - l);
randomsY.push(random2 + l);
randomsY.push(random2 - l);
}
// creating new ball without collision inside canvas
 let NewBall = new Ball(random, random2 , 'red');
 
 NewBall.drawBall();
balls.push(NewBall);
}
console.log(randomsX);
console.log(randomsY);




// moving the ball with the sensors

function handleOrientation(event)  {  
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    let x = event.beta *5;    
        let y = event.gamma *5; 
        // create new ball which is able to moving with sensors
    let ball = new Ball(x,y, 'black')  
    ball.drawBall();
      
    // draws random random balls on cleared canvas
    for(let k = 0 ; k< balls.length; k++)
    {
        balls[k].drawBall();
    }
    
    
}
    
    window.addEventListener("deviceorientation", handleOrientation);