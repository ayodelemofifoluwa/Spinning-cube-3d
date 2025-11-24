const cube = document.querySelector('.cube');

let angleX = 0;
let angleY = 0;
let rotating = true;
let direction = 1;

// === Continuous Rotation ===
function rotateCube() {
  if (rotating) {
    angleX += 0.6 * direction;
    angleY += 0.6 * direction;
    cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  }
  requestAnimationFrame(rotateCube);
}

// === Pause on Hover ===
cube.addEventListener('mouseenter', () => rotating = false);
cube.addEventListener('mouseleave', () => rotating = true);

// === Click to Reverse Direction ===
cube.addEventListener('click', () => {
  direction *= -1;
  cube.style.filter = "drop-shadow(0 0 20px rgba(0,255,255,0.9))"; // glow feedback
  setTimeout(() => cube.style.filter = "", 400);
});

// === Keyboard Controls ===
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      angleX -= 10;
      break;
    case 'ArrowDown':
      angleX += 10;
      break;
    case 'ArrowLeft':
      angleY -= 10;
      break;
    case 'ArrowRight':
      angleY += 10;
      break;
  }
  cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

// Start rotation
rotateCube();
