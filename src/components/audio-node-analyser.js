  
  const audioAnalyse = (audio) => {
  
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const source = context.createMediaElementSource(audio);

    // audio graf: source -> analaser -> destination

    source.connect(analyser);  
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;

    const waveform = () => {
      let arr = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(arr);
      return arr;
    };

    const frequencies = () => {
      let arr = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(arr);
      return arr;
    };

    return {waveform, frequencies};

  };

  export default audioAnalyse;
