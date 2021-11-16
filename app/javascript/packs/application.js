// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import "controllers"
import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';

document.addEventListener('turbolinks:load', () => {
  initMapbox();
  initAutocomplete();
  const markers = document.querySelectorAll('.mapboxgl-marker');
  if (document.querySelectorAll('.calendar-heading')) {
    const prev = document.querySelectorAll('.calendar-heading a')[0]
    if (prev) {
      prev.innerText = '<'
    }
    const next = document.querySelectorAll('.calendar-heading a')[1]
    if (next) {
      next.innerText = '>'
    }
  }
  let currentCard;
  markers.forEach((marker) => {
    marker.addEventListener('click', () => {
      const id = marker.dataset.id
      if (currentCard) {
        currentCard.setAttribute('class', 'card-product col-12');
      }
      const card = document.getElementById(`venue${id}`);;
      currentCard = card;
      card.setAttribute('class', 'card-product col-12 card__selected');
      currentCard = card;
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    });
  });
  const ytIcon = document.querySelector('.fa-youtube');
  if (ytIcon) {
    const ytForm = document.querySelector('.youtube-form');
    ytIcon.addEventListener('click', () => {
      ytForm.removeAttribute('class', 'd-none');
      ytIcon.setAttribute('class', 'd-none');
    });
  };
  const scIcon = document.querySelector('.fa-soundcloud');
  if (scIcon) {
    const scForm = document.querySelector('.soundcloud-form');
    scIcon.addEventListener('click', () => {
      scForm.removeAttribute('class', 'd-none');
      scIcon.setAttribute('class', 'd-none');
    });
  };
});
