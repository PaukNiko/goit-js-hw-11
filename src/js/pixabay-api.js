import axios from 'axios';

const API_KEY = '55960167-e523c3424fe4b885fc3ac8e74';

const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`${BASE_URL}?${params}`)
    .then(response => response.data);
}