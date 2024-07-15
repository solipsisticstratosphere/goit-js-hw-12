import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const fetchImages = async (search, pagePhoto, limit) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=44687559-d8ede6072036f50d72c2e92ab`,
    {
      params: {
        q: search,
        image_type: 'photo',
        pretty: 'true',
        orientation: 'horizontal',
        safesearch: 'true',
        page: pagePhoto,
        per_page: limit,
      },
    }
  );
  if (response.status !== 200) {
    throw new iziToast.error({
      position: 'topRight',
      message: 'Sorry, there are some errors!',
    });
  }
  return response.data;
};
