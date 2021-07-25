import TheRestoDbSource from '../../data/restaurantdb-source';
import {createRestoItemTemplate} from '../templates/template-creator';
import {} from '../templates/customHero';

const NowPlaying = {
  async render() {
    return `
      <hero-component></hero-component>
      <div class="content">
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.nowPlayingRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default NowPlaying;
