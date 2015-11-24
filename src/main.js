  'use strict';

  import soundcloud from './components/soundcloud';
  import analyser from './components/audio-node-analyser';
  import drawer from './components/visualization';
  import scener from './components/scene';
  import { renderInfo } from './components/template';
  import playlist from './components/playlist';
  import sleep from './components/sleep';



  // set up CORS for SoundCloud output to prevent
  // MediaElementAudioSource outputs zeroes due to CORS access restrictions
  // https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes


  const draw = drawer();

  const audio = new Audio();
  audio.crossOrigin = 'Anonymous';

  const analyse = analyser(audio);

  const sound = soundcloud({ audio });
  sound.init()
  sound.addTrack(81253937, render);


  function render(track) {

    sound.play();
    renderInfo(track);

    const scene = scener(100);
    let gap = 1;
    let lines = 0;

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
          draw.sun(scene.get().slice(lines), gap);
          gap += .2*5;
        };
      }, 1000/60);
    };

    setInterval(()=> {
      lines = Math.ceil(Math.random()*100)}
      , 10000);

    const activity = sleep({
      sleepAfter: 5000,
      step: 1000,
      elm: document.querySelector('#footer'),
      lastActivity: new Date().valueOf()
    });


    listen();
    painter();
    activity.start();

  };


  module.exports = { sound, sleep };


