import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/restaurantdb-source';
import {createRestoDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div class="content">
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restaurantsContainer = document.querySelector('#resto');
    restaurantsContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        backdrop_path: CONFIG.BASE_IMAGE,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
      },
    });
  },
};

export default Detail;
