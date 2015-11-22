  'use strict';

  import soundcloud from './components/soundcloud';
  import analyser from './components/audio-node-analyser';
  import drawer from './components/visualization';
  import scener from './components/scene'

  // set up CORS for SoundCloud output to prevent
  // MediaElementAudioSource outputs zeroes due to CORS access restrictions
  // https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes

  const audio = new Audio();
  audio.crossOrigin = 'Anonymous';
  // audio.controls = 'true';

  const analyse = analyser(audio);

  const sound = soundcloud({ audio });
  sound.init()
  sound.addTrack()
  sound.play();

  const draw = drawer();
  const scene = scener(60);

  setInterval(function(){
    scene.add(analyse.frequencies());
// scene.add(analyse.waveform());
  }, 10);

  setInterval(function(){
    if( scene.ready()){ draw.draw(scene.get())};
  }, 1000/60);

  // module.exports = {sc, a, b, scene};


