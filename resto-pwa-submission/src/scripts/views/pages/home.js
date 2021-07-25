import TheRestoDbSource from '../../data/restaurantdb-source';
import {createRestoItemTemplate} from '../templates/template-creator';
// import {} from "../templates/customHero";

const Home = {
  async render() {
    return `
      <div id="content" class="content">
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
