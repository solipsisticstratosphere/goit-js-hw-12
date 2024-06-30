import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = (data, list) => {
  const markup = data.hits
    .map(pic => {
      return `<li class="card">
        <a href="${pic.largeImageURL}"><img
          src="${pic.webformatURL}"
          alt="${pic.tags}"
          class="search-pic"
        />
        </a>
        <ul class="description">
          <li><a>Likes</a> <a>${pic.likes}</a></li>
          <li><a>Views</a> <a>${pic.views}</a></li>
          <li><a>Comments</a> <a>${pic.comments}</a></li>
          <li><a>Downloads</a> <a>${pic.downloads}</a></li>
        </ul>
      </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);

  let gallery_x = new SimpleLightbox('.search-list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  gallery_x.on('show.simplelightbox', function (event) {
    event.preventDefault();
  });

  gallery_x.refresh();
};
