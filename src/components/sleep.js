'use strict';

const sleeper = state => {

  document.body.addEventListener('mousemove', e => {
    state.lastActivity = new Date().valueOf();
    state.elm.style.opacity = '1';
    document.querySelector('*').style.cursor = 'default';
    state.elm.style.bottom = '0';
  });

  const noActivity = () => {
    let current = new Date();
    return current.valueOf() - state.lastActivity;
  };

  const fade = () => {
    if ( noActivity() > state.sleepAfter ) {
        state.elm.style.opacity = '0';
        document.querySelector('*').style.cursor = 'none';
        state.elm.style.bottom = '-10%';
      };
  };


  const start = () => setInterval(fade, state.step);

  // const stop = clearInterval(start);

  return {
    fade,
    start,
    stop
  };

};


export default sleeper;