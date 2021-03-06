import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestoIdb,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
