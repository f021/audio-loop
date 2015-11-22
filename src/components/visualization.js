
const createCanvas = () => {

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const waves = (wave,j) => {
    let step = canvas.width/wave.length;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(200, 200, 200, ${j/100})`;
    wave.forEach((w,i) => {
      // ctx.strokeStyle = `rgba(200,200,${200/i*10}, 1)`;
      ctx.lineTo(i * step, w*(i+1));
      // ctx.stroke();
    });
    ctx.stroke();
    ctx.closePath();
  };

  const freqRect = freq => {
    let len = canvas.width/freq.length;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    freq.forEach((f,i) => {
    ctx.fillStyle = `rgb(${f/2}, 100, 100)`; 
      ctx.rect(i*len, canvas.height-f, len, f);
      ctx.stroke();
      ctx.closePath();
    });
  };

  const lines = data => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    data.forEach((line, i) => {
      ctx.setTransform(i, 0, 0, i/10, 0, 0);
      waves(line, i);
      ctx.resetTransform();
    });
  };


  const sun = data => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width/2, canvas.height/2);
    data.forEach((line,i) => {
      // ctx.setTransform(.5, 0, 0, .5, 0, 0);
      ctx.rotate(1440/100 * Math.PI / 180);
      waves(line, i);
      // ctx.resetTransform();
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }


  return { lines, freqRect, sun };

};


export default createCanvas;