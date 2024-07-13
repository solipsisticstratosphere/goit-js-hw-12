import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form-search');
const userText = document.querySelector('input[name=search]');
const list = document.querySelector('.search-list');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let search = '';
let pagePhoto = 1;
const limit = 15;
let totalHits = 0;

const fetchAndRenderImages = (isNewSearch = false) => {
  if (isNewSearch) {
    pagePhoto = 1;
    totalHits = 0;
    list.innerHTML = '';
    loadMoreBtn.classList.add('hidden');
  }

  loader.style.visibility = 'visible';
  loader.style.opacity = '1';

  fetchImages(search, pagePhoto, limit)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loadMoreBtn.classList.add('hidden');
      } else {
        renderImages(data, list);
        totalHits = data.totalHits;
        console.log('Total Hits:', totalHits);
        if (pagePhoto * limit >= totalHits) {
          loadMoreBtn.classList.add('hidden');
          iziToast.info({
            position: 'topRight',
            message:
              "We're sorry, but you've reached the end of search results.",
          });
        } else {
          loadMoreBtn.classList.remove('hidden');
          setTimeout(smoothScroll, 100);
        }
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.style.visibility = 'hidden';
      loader.style.opacity = '0';
    });
};

const smoothScroll = () => {
  const galleryItem = document.querySelector('.gallery-image');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;

    if (itemHeight > 0) {
      window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth',
      });
    } else {
      console.log('222');
    }
  } else {
    console.log('No gallery items found');
  }
};

form.addEventListener('submit', evt => {
  evt.preventDefault();
  search = userText.value;
  fetchAndRenderImages(true);
});

loadMoreBtn.addEventListener('click', () => {
  pagePhoto += 1;
  fetchAndRenderImages();
});
