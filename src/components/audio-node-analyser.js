  
  const audioAnalyse = (audio) => {
  
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const source = context.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;

    const makeArr = _ => new Uint8Array(bufferLength);

    const waveform = _ => analyser.getByteTimeDomainData(makeArr);

    const frequencies = _ =>  analyser.getByteFrequencyData(makeArr);

    return {waveform, frequencies};

  };

  export default audioAnalyse;
