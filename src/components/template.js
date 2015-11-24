'use strict';

const li = state => {


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


 const renderInfo = state => {
  
  let elm = document.querySelector('#footer');
  
  if (!elm) {
    elm = document.createElement('div');
    elm.id = 'footer';
    document.body.appendChild(elm);
  };

  elm.innerHTML = `
    <ul class="soundtrack-info">
      <li class='user'>
        <a href='${state.user.permalink_url}'>
          ${state.user.username}:
        </a>
      </li>
      <li class='title'>
        <a href='${state.permalink_url}'>
          ${state.title}
        </a>
      </li>
      <li class='soundcloud-logo'>
        <a href='${state.permalink_url}'>
          <img src='./img/logo_white.png'>
        </a>
      </li>
    </ul>`;

 }

export { renderInfo, li };