
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background('blue');
  }

  if (keyIsDown(DOWN_ARROW))
  {
   background('red');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('green');
  }
  

}




