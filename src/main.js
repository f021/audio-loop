  'use strict';

  import soundcloud from './components/soundcloud';
  import analyser from './components/audio-node-analyser';
  import draw from './components/visualization';

  // set up CORS for SoundCloud output to prevent
  // MediaElementAudioSource outputs zeroes due to CORS access restrictions
  // https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes

  const audio = new Audio();
  audio.crossOrigin = 'Anonymous';
  audio.controls = 'true';

  const a = analyser(audio);

  const sc = soundcloud({ audio });
  sc.init()
  sc.addTrack()
  sc.play();
  const b = draw();

  setInterval(function(){
    b.draw(a.frequencies(), a.waveform());
  }, 50);
  // document.body.appendChild(audio);

  // };

  // window.onload = init;
  module.exports = {sc, a, b};


