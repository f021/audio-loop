
const createCanvas = () => {

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const draw = (freq, wave) => {
    let len = canvas.width/freq.length;
    // console.log(len);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    freq.forEach((f,i) => {
      ctx.fillStyle = `rgb(${f/2}, 50,50)`; 
      ctx.fillRect(i*len, canvas.height-f, len, f);
    });

    ctx.beginPath();
    wave.forEach((w,i) => {
      ctx.lineTo(i*4,w);
    })
    ctx.stroke();
    ctx.closePath();
  };



  return {draw};

};


export default createCanvas;