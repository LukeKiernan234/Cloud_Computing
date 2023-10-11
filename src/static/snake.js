// Define the Snake game variables
const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
const boxSize = 20;
const snake = [{ x: 10, y: 10 }];
let direction = 'right';
let food = { x: Math.floor(Math.random() * 15) * boxSize, y: Math.floor(Math.random() * 15) * boxSize };

// Function to draw the Snake and Food
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the Snake
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
  });

  // Draw the Food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Function to update the game
function update() {
  // Move the Snake
  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === 'right') headX += boxSize;
  if (direction === 'left') headX -= boxSize;
  if (direction === 'up') headY -= boxSize;
  if (direction === 'down') headY += boxSize;

  const newHead = { x: headX, y: headY };

  // Check for collision with Food
  if (headX === food.x && headY === food.y) {
    food = { x: Math.floor(Math.random() * 15) * boxSize, y: Math.floor(Math.random() * 15) * boxSize };
  } else {
    snake.pop();
  }

  snake.unshift(newHead);
}

// Function to handle key presses
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
  if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
  if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

// Main game loop
function gameLoop() {
  draw();
  update();
}

// run the game loop
setInterval(gameLoop, 100);
