import axios from 'axios';

const getLyrics = (artist, songTitle) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export default getLyrics;
