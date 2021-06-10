import TheMovieDbSource from '../../data/themoviedb-source';
import {createMovieItemTemplate} from '../templates/template-creator';
import {} from '../templates/customHero';

const NowPlaying = {
  async render() {
    return `
      <hero-component></hero-component>
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">


        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((resto) => {
      moviesContainer.innerHTML += createMovieItemTemplate(resto);
    });
  },
};

export default NowPlaying;
