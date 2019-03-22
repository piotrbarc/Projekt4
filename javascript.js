let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
// flag(true) - moving enable ,
 //flag(false) - moving disable
let flag = true;

// creating ball
class Ball {
  constructor(cordX, cordY, color, id) {
    this.cordX = cordX;
    this.cordY = cordY;
    this.color = color;
    this.id = id;
  }

  // drawing ball in canvas
  drawBall() {
    ctx.beginPath();
    ctx.arc(this.cordX, this.cordY, 25, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
}

let balls = [];
let randomsX = [];
let randomsY = [];

// draw random balls on canvas and add them to array 'balls'
for (let i = 0; i < 10; i++) {
  //random balls only inside canvas
  let random = Math.floor(Math.random() * 500) + 50;
  let random2 = Math.floor(Math.random() * 750) + 50;

  //if any random ball has collision with another ball , get a new random ball
  while (randomsX.includes(random) || randomsY.includes(random2)) {
    random = Math.floor(Math.random() * 500) + 50;
    random2 = Math.floor(Math.random() * 750) + 50;
  }

  // push random cords  to array to avoid collision (+30 radius)

  for (let l = 0; l < 25; l++) {
    randomsX.push(random + l);
    randomsX.push(random - l);
    randomsY.push(random2 + l);
    randomsY.push(random2 - l);
  }
  // creating new ball without collision inside canvas
  let NewBall = new Ball(random, random2, "red", i);

  NewBall.drawBall();
  balls.push(NewBall);
}

let start = Date.now();

function draw() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].drawBall();
  }
}

let testBall = new Ball(0, 750, "black", "testball");
testBall.drawBall();
let finishBall = new Ball(650, 50, "blue", "finishBall");
finishBall.drawBall();
// create new ball which is able to moving with sensors
let myBall = new Ball(12, 12, "black", "myBall");
balls.push(myBall);
balls.push(finishBall);


// moving the ball with the sensors
function handleOrientation(event) {
  // clear canvas
  let x = event.alpha * 8;
  let y = event.beta * 8;
  if(flag){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      myBall.cordX = x;
      myBall.cordY = y;
  }

 


  // draws random random balls on cleared canvas
  draw();

  //checking collision with random balls
  for (let p = 0; p < balls.length; p++) {
    let xa = myBall.cordX;
    let ya = myBall.cordY;
    let xb = balls[p].cordX;
    let yb = balls[p].cordY;
    let mid = parseInt(
      Math.sqrt((xb - xa) * (xb - xa) + (yb - ya) * (yb - ya))
    );
    
    // checking if circles intersecting each other
    if (0 < mid && mid < 50 && balls[p].id != "finishBall") {
      // show text after lose

      ctx.font = "80px Arial";
      ctx.fillStyle = "gold";
      ctx.fillText("Game Over", canvas.width / 4, canvas.height / 2);
      flag = false;
      // refresh page after 5s
      window.setTimeout(function() {
        location.reload();
      }, 5000);
    }
  }

  // if black ball hit blue ball, user will win
  let xa = myBall.cordX;
  let ya = myBall.cordY;
  let xb = finishBall.cordX;
  let yb = finishBall.cordY;
  let mid = parseInt(Math.sqrt((xb - xa) * (xb - xa) + (yb - ya) * (yb - ya)));

  if (0 < mid && mid < 50 && flag) {
    let stop = Date.now();
    let text = (stop - start) / 1000 + "sekund";
    // show text after win
    ctx.font = "60px Arial";
    ctx.fillStyle = "gold";

    ctx.fillText(`You Win !!!`, canvas.width / 4, canvas.height / 2);
    ctx.fillText(text, canvas.width / 4, canvas.height / 3);
    flag = false;

    //check time and refresh page

    window.setTimeout(function() {
      location.reload();
    }, 5000);
  }
}

window.addEventListener("deviceorientation", handleOrientation);
