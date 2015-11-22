
const createCanvas = () => {

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const drawWave = (wave,j) => {
    let step = canvas.width/wave.length;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(200,200,200, ${j/10})`;
    wave.forEach((w,i) => {
      ctx.lineTo(i * step, w);
    });
    ctx.stroke();
    ctx.closePath();
  };

  const test = (freq, wave) => {
    let len = canvas.width/freq.length;
    let lenW = canvas.width/wave.length;
    // console.log(len);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgb(210,200,200)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    freq.forEach((f,i) => {
    ctx.fillStyle = `rgb(${f/2}, 100, 100)`; 
      ctx.rect(i*len, canvas.height-f, len, f);
      // ctx.fill();
      ctx.stroke();
      ctx.closePath();
    });
    // translate(0, canvas.height/2)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // ctx.translate(0, 500);
    ctx.beginPath();
    wave.forEach((w,i) => {
      ctx.lineTo(i*lenW,w);
    });
    // ctx.fillStyle = `rgba(200, 100, 100, .5)`;
    // ctx.fill();
    // ctx.stokeStyle = '#ff0000';
    ctx.stroke();
    ctx.closePath();
    ctx.resetTransform();
  };

  const draw = data => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    data.forEach((line, i) => {
      ctx.setTransform(i, 0, 0, i/10, 0, 0);
      drawWave(line, i);
      ctx.resetTransform();
    });
  };


  return {draw};

};


export default createCanvas;