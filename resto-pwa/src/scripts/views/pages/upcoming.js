import TheRestoDbSource from '../../data/restaurantdb-source';
import {createRestoItemTemplate} from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Upcoming in Cinema</h2>
      <div id="restaurants" class="restaurants">


      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.upcomingRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Upcoming;
