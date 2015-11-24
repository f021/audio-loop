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

  addTrack(trackID, render) {
    SC.get(`/tracks/${trackID}`, track => {
      console.log(track);
      state.audio.src = `${track.stream_url}?client_id=${clientId}`;
      render(track);
    });
  },

  JSON: {

    byTrack(trackID) {
      SC.get(`/tracks/${trackID}`, track => {
        console.log( JSON.stringify(track));
      })
    },

    byURL(url) {
      xhr.get(`${resolveStr}${url}&client_id=${clientId}`, e=> console.log(e));
    }
  },

  play() { state.audio.play(); },

  search(target, callback) {
    SC.get('/tracks', target, tracks => callback(tracks));
  },


});

export default soundcloud;



