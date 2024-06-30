export const fetchImages = search => {
  return fetch(
    `https://pixabay.com/api/?key=44687559-d8ede6072036f50d72c2e92ab&q=${search}&image_type=photo&pretty=true&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
