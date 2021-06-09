import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import {createMovieDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const moviesContainer = document.querySelector('#movie');
    moviesContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        name: movie.name,
        description: movie.description,
        backdrop_path: CONFIG.BASE_IMAGE,
        pictureId: movie.pictureId,
        rating: movie.rating,
        city: movie.city,
      },
    });
  },
};

export default Detail;
