'use strict';

import scene from './components/scene';

console.log(scene.id);
const $ = str => document.querySelector(str);
const musicList = $('#music-list');
const music = document.querySelector('audio');
let source;

SC.initialize({
  client_id: scene.id});

// initiate auth popup
// SC.connect().then(function() {
//   return SC.get('/me');
// }).then(function(me) {
//   alert('Hello, ' + me.username);
// });
 
// SC.get('/tracks', { genres: 'foo'}, tracks => {
//   tracks.forEach(t => {
//     console.log(t);
//     let elm = document.createElement('li');
//     musicList.appendChild(elm);
//     elm.innerText = t.title;
//   });
// });

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioAnalyser = audioCtx.createAnalyser();
  audioAnalyser.fftSize = 256;
  
  window.addEventListener('load', setup);

  function setup(){
    source = audioCtx.createMediaElementSource(music);
    source.connect(audioAnalyser);
    audioAnalyser.connect(audioCtx.destination);
  }

  SC.stream('/tracks/154418619', function(player){

    console.log(player);
    document.querySelector('audio').src = player.url;
    $('audio').play();
    // console.log(source);
  });

  // $('audio').addEventListener('progress', e => {console.log('ups')});

// SC.get('/tracks/154418619', track => {
//   // SC.oEmbed(track.permalink_url, $('#player'));
//   // console.log(track);
//   console.dir(track);
//   document.querySelector('audio').src = track.stream_url;
// });



// console.dir(audioCtx);

// const fn = a => {console.dir(audioAnalyser);};

// setInterval(fn, 1000);