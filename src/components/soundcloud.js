import clientId from './soundCloudID';

const soundcloud = (state) => ({

  init() {
    SC.initialize({
      client_id: clientId
    });
  },

  addTrack(trackId) {
    SC.get('/tracks/234090982', track => {
      console.log(track);
      state.audio.src = `${track.stream_url}?client_id=${clientId}`;
      // state.audio.play();
    });
  },

  play() { state.audio.play(); }

});

export default soundcloud;