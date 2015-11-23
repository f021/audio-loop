'use strict';

import clientId from './soundCloudID';
import xhr from './xhr';

const resolveStr = `http://api.soundcloud.com/resolve?url='`;

const soundcloud = (state) => ({
  
  init() {
    SC.initialize({
      client_id: clientId
    });
  },

  addTrack(trackId) {
    SC.get('/tracks/17556576', track => {
      console.log(track);
      state.audio.src = `${track.stream_url}?client_id=${clientId}`;
      // state.audio.play();
    });
  },

  play() { state.audio.play(); },

  search(target, callback) {
    SC.get('/tracks', target, tracks => callback(tracks));
  },

  resolve(url) {
      xhr.get(`${resolveStr}${url}&client_id=${clientId}`, e=> console.log(e));
  }

});

export default soundcloud;



