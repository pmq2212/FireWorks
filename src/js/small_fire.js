// set constans
const MAX_PARTICLES = 100000,
  NFIELDS = 5, // x, y, vx, vy, age,
  // size of the array
  PARTICLES_LENGTH = MAX_PARTICLES * NFIELDS,
  // some shortcuts
  PI = Math.PI,
  random = Math.random,
  cos = Math.cos,
  sin = Math.sin;

  // position to insert the next particle
  let particles_i = 0,
   particlesFire = new Float32Array(PARTICLES_LENGTH),
  // time in ms
  t0 = new Date()*1;
  mouseX = null,
  mouseY = null;
let canvasFire, ctxFire;

// random numbers in the form of range +/- base
function fuzzy(range, base) {
  return (base || 0) + (Math.random()-0.5)*range*2;
}

function initFire() {
  canvasFire = document.getElementById('fire-canvas');
  canvasFire.width = innerWidth;
  canvasFire.height = innerHeight;
  ctxFire = canvasFire.getContext('2d');
}

// Get coords on canvas
function getMouseCoords(e) {
  if (isBegin) {
    mouseX = e.pageX - canvasFire.offsetLeft;
    mouseY = e.pageY - canvasFire.offsetTop;
  }
};

function setCoordsFire(x, y) {
  if (isBegin) {
    x = x*canvasFire.width;
    y = y*canvasFire.height

    mouseX = x - canvasFire.offsetLeft;
    mouseY = y - canvasFire.offsetTop;
  }
}

// Don't render particles which are not on canvas
function checkBounds(x, y) {
  return x < 0 || x >= w || y < 0 || y >= h;
}

// window.addEventListener("resize", resize);
// document.addEventListener('mousemove', getMouseCoords);

function emit(x, y) {
   for(let i = 0; i < 250; i++) {
     particles_i = (particles_i+NFIELDS) % PARTICLES_LENGTH;
     particlesFire[particles_i] = x;
     particlesFire[particles_i+1] = y;
     const alpha = fuzzy(PI),
       radius = random()*100,
       vx = cos(alpha)*radius,
       vy = sin(alpha)*radius,
       age = random();
       particlesFire[particles_i+2] = vx;
       particlesFire[particles_i+3] = vy;
       particlesFire[particles_i+4] = age;
    }
}

function drawFire(x, y) {
  if (x && y) setCoordsFire(x, y);

  if (isBegin && mouseX && mouseY) {
    let t1 = new Date() * 1,
        // time delta in seconds
        td = (t1-t0)/1000,
        MAX_AGE = 5,
        width = canvasFire.width,
        height = canvasFire.height,
        gravity = 50,
        drag = 0.999,
        // color
        r = 120,
        g = 55,
        b = 10;
    t0 = t1;

    // emit particles
    emit(mouseX, mouseY);

    ctxFire.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctxFire.fillRect(0, 0, width, height);
    const imgdata = ctxFire.getImageData(0, 0, width, height),
        data = imgdata.data;

    for(let i = 0; i < PARTICLES_LENGTH; i+= NFIELDS) {
      // check age
      if((particlesFire[i+4] += td) > MAX_AGE) continue;
      // ~~ = double bitwise inversion = Math.ceil
      let x = ~~(particlesFire[i] = (particlesFire[i] + (particlesFire[i+2] *= drag)*td)),
          y = ~~(particlesFire[i+1] = (particlesFire[i+1] + (particlesFire[i+3] =(particlesFire[i+3] + gravity*td)*drag)*td));

      // check bounds
      if(checkBounds(x, y)) continue;

      // calculate offset
      const offset = (x+y*width)*4;

      // set pixel
      data[offset] += r;
      data[offset+1] += g;
      data[offset+2] += b;
    }

    ctxFire.putImageData(imgdata, 0, 0);
    requestAnimationFrame(drawFire);
  } else {
    ctxFire.clearRect(0, 0, canvasFire.width, canvasFire.height);
  }
}
