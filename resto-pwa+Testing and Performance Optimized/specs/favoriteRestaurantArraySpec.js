import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((resto) => resto.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurant;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      // console.log("dont have id");
      return;
    }

    // ensure id has not been registered in favoriteRestaurant
    if (this.getAllRestaurants(resto.id)) {
      // console.log("already in favorite restauarant");
      return;
    }

    favoriteRestaurant.push(resto);
  },

  deleteResto(id) {
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteRestaurant = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestoArray);
});
