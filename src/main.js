  'use strict';

  import soundcloud from './components/soundcloud';
  import analyser from './components/audio-node-analyser';
  import drawer from './components/visualization';
  import scener from './components/scene';
  import { renderInfo, li } from './components/template';
  import playlist from './components/playlist';
  import sleep from './components/sleep';


  // const test = 'https://soundcloud.com/max-richter/this-bitter-earth-on-the';

  // set up CORS for SoundCloud output to prevent
  // MediaElementAudioSource outputs zeroes due to CORS access restrictions
  // https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes


  const draw = drawer(); // initialize canvas

  const audio = new Audio();
  audio.crossOrigin = 'Anonymous';

  const analyse = analyser(audio);

  const sound = soundcloud({ audio });
  sound.init()
  sound.addTrack(17556576, render);
  sound.play();


  function render(track) {

    renderInfo(track);

    const scene = scener(100);
    let gap = 5672;

    const listen = () => {
      setInterval(() => { 
      scene.add(analyse.frequencies()
        .filter(e => e > 0));
      }, 10);
    };

    const painter = () => {
      setInterval(() => {
        if (scene.ready()) {
          draw.clear();
          draw.sun(scene.get(), gap);
        };
      }, 1000/60);
    };

    listen();
    painter();

    const activity = sleep({
      sleepAfter: 5000,
      step: 100,
      elm: document.querySelector('#footer'),
      lastActivity: new Date().valueOf()
    });

    activity.start();

  };


  module.exports = { sound, sleep };


