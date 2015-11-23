'use strict';

const li = state => {

  // const rendTag = (tag, value) => `<${tag}></${tag}>`;

  if (state.kind === 'track') {
  
    let template = `
      ${ state.artwork_url !== null && `<img src='${state.artwork_url}'>` || ``}
      <h1>${state.title}</h1>
      <p>${state.description}</p>
    `;

    let elm = document.createElement('li');
    elm.innerHTML = template;
    console.log('tmp', elm);
    return elm;
  };

};


export default li;