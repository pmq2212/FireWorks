function makeChar(c){
    let tmp = document.createElement('canvas');
    let size = tmp.width = tmp.height = w<400?100:150;
    let tmpCtx = tmp.getContext('2d');
    tmpCtx.font = 'bold '+size+'px Arial';
    tmpCtx.fillStyle = 'white';
    tmpCtx.textBaseline = "middle";
    tmpCtx.textAlign = "center";
    tmpCtx.fillText(c, size/2, size/2);
    let char2 = tmpCtx.getImageData(0,0,size,size);
    let char2particles = [];

    // Check character " "
    if (c !== ' ') {
      for (var i=0; char2particles.length< particles; i++){
        let x = size*Math.random();
        let y = size*Math.random();
        let offset = parseInt(y)*size*4 + parseInt(x)*4;
        if(char2.data[offset])
          char2particles.push([x-size/2,y-size/2])
      }
    }

    return char2particles;
}

function initTitle() {
    canvas = document.getElementById('title-canvas');
    ctx = canvas.getContext('2d');
    resizeTitle();
}

function resizeTitle() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    particles = innerWidth<400? 55 : 99;
}

function makeChars(t) {
    let charsActual = [];
    for (let i =0; i < line.length; i++) {
      let item = line[i];
      if (i > 0) current= -1;

      let actual = parseInt(t / duration) % (item.length);
      if (current === actual)
        return
      current = actual;
      charsActual.push([...item[actual]].map(makeChar));
    }
    chars = charsActual;
}

function renderTitle(timestamp) {
    let time = 0;
    if (firstRender) {
      timeStart = timestamp;
      firstRender =false;
    } else {
      time = timestamp - timeStart;
    }

    makeChars(time);
    requestAnimationFrame(renderTitle);
    let cntRender = duration * 2;
    if (time <= cntRender) {
      ctx.fillStyle = '#00000010'
      ctx.fillRect(0, 0, w, h);
      chars.forEach( (row, idx) =>
        row.forEach(
          (pts,i) => firework(time, i, pts, row, idx)
        )
      );
    }
}

function firework(t, i, pts, row, lineNo) {
  let spaceLine = 0.2;
  t -= i*50;
  let id = i + row.length*parseInt(t - t%duration) + 0.5;
  t = t % duration / duration;
  let dx = (i+0.8)*w/(1+row.length);
  dx += Math.min(0.33, t)*100*Math.sin(id);
  let dy = h* (0.75 -  lineNo*spaceLine);
  dy += Math.sin(id*4547.411)*h*0.01;
  if (t < 0.33) {
    // Check character " "
    if (pts.length) {
      rocket(dx, dy, id, t*3);
    }
  } else {
    explosion(pts, dx, dy, id, Math.min(1, Math.max(0, t-0.33)*2));
  }
}

function rocket(x, y, id, t) {
  ctx.fillStyle = 'white';
  let r = 2-2*t + Math.pow(t, 15*t)*16;
  y = h - y*t;
  circle(x, y, r)
}

function explosion(pts, x, y, id, t) {
  let dy = (t*t*t)*20;
  let r = Math.sin(id)*1 + 3
  r = t<0.5 ? (t+0.5)*t*r:r-t*r
  ctx.fillStyle = `hsl(${id*55}, 55%, 55%)`;
  pts.forEach((xy,i) => {
    if (i%20 === 0)
      ctx.fillStyle = `hsl(${id*55}, 55%, ${55+t*Math.sin(t*55+i)*45}%)`;
    circle(t*xy[0] + x, h - y + t*xy[1] + dy, r)
  });
}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, 6.283);
  ctx.fill();
}