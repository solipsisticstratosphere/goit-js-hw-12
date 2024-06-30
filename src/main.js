import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form-search');
const userText = document.querySelector('input[name=search]');
const list = document.querySelector('.search-list');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  let search = userText.value;
  list.innerHTML = '';

  const loader = document.createElement('span');
  loader.className = 'loader';
  document.body.appendChild(loader);

  fetchImages(search)
    .then(data => {
      if (Object.keys(data.hits).length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(data, list);
        userText.value = '';
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.remove();
    });
});
