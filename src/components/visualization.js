'use strict';


const createCanvas = () => {

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const waves = (wave,j) => {
    let step = canvas.width/wave.length;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(200, 200, 200, ${j/10})`;
    wave.forEach((w,i) => {
      ctx.lineTo(i, w);
    });
    ctx.stroke();
    // ctx.closePath();
  };

  const freqRect = freq => {
    let len = canvas.width/freq.length;
    ctx.beginPath();
    freq.forEach((f,i) => {
    ctx.fillStyle = `rgb(${f/2}, 100, 100)`; 
      ctx.rect(i, canvas.height-f, len, f);
      ctx.stroke();
      ctx.closePath();
    });
  };

  const lines = data => {
    data.forEach((line, i) => {
      ctx.setTransform(i, 0, 0, i/10, 0, 0);
      waves(line, i);
      ctx.resetTransform();
    });
  };

  const clear = () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };


  const sun = (data, gap) => {
    ctx.translate(canvas.width/2, canvas.height/2);
    data.forEach((line,i) => {
      ctx.rotate(gap/100 * Math.PI / 180);
      waves(line, i);
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }


  return { lines, freqRect, sun, clear };

};


export default createCanvas;