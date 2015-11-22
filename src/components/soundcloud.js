import clientId from './soundCloudID';

const soundcloud = (state) => ({

  init() {
    SC.initialize({
      client_id: clientId
    });
  },
//81253937 1626898 41412809
  addTrack(trackId) {
    SC.get('/tracks/81253937', track => {
      console.log(track);
      state.audio.src = `${track.stream_url}?client_id=${clientId}`;
      // state.audio.play();
    });
  },

  play() { state.audio.play(); }

});

export default soundcloud;



