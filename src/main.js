  'use strict';

  import soundcloud from './components/soundcloud';
  import analyser from './components/audio-node-analyser';
  import drawer from './components/visualization';
  import scener from './components/scene';
  import li from './components/template';
  import playlist from './components/playlist';


  // const test = 'https://soundcloud.com/max-richter/this-bitter-earth-on-the';

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
  // sound.play();
  sound.resolve(test);

  const draw = drawer();
  const scene = scener(100);
  let gap = 1;

  const render = () => {
    let ul = document.createElement('ul');
    sound.search({client_id: playlist[0]}, tracks => {
      console.log(tracks);
      tracks.forEach(track => ul.appendChild(li(track)));
    });
    console.log(ul);
    document.body.appendChild(ul);
  }

  const listen = () => {
    setInterval(() => { 
    scene.add(analyse.frequencies()
                     .filter(e => e > 0));
//  scene.add(analyse.waveform());
    }, 10);
  };

  const painter = () => {
    setInterval(() => {
      if (scene.ready()) {
        // draw.clear();
        draw.sun(scene.get(), 5671);
        gap += .1;
        // draw.lines(scene.get());
      };
    }, 1000/60);
  };



  module.exports = { sound, render };


