'use strict';

const sleeper = state => {

	let opacity = 1;

	document.body.addEventListener('mousemove', e => {
		state.lastActivity = new Date().valueOf();
		state.elm.style.visibility = 'visible';
		state.elm.style.opacity = 1;
		opacity = 1;
	});

	const noActivity = () => {
		let current = new Date();
		console.log(current.valueOf() - state.lastActivity);
		return current.valueOf() - state.lastActivity;
	};

	const fade = () => {
		console.log(state.sleepAfter);
		if ( noActivity() > state.sleepAfter ) {
			opacity -= .1;
			if (!opacity) {
				state.elm.style.visibility = 'hidden';
			} else {
				console.log(opacity);
				console.log(state.elm);
				state.elm.style.opacity = `${opacity}`;
			};
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