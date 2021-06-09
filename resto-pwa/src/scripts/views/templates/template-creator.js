import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (resto) => `

  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="movie__info">
    <h3>Information</h3>
      <h4>City</h4>
      <p>${resto.city}</p>
      <h4>Address</h4>
      <p>${resto.address}</p>
      <h4>Food Menu</h4>
      <span id="food">
        <p>${resto.menus.foods.map((food) => food.name)}</p>
      </span>
      <h4>Drink Menu</h4>
      <span id="drink">
        <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
      </span>
      <h4>Rating</h4>
      <p>⭐${resto.rating}</p>
  </div>
  <div class="movie__overview">
    <<h3>Description></h3>
    <p>${resto.description}</p>
  </div>
  <div class="movie__overview">
    <h3>Customer Review</h3>
    ${resto.customerReviews.map((review) => `
        <div class="restaurantInfoList">
            <h6 tabindex="0">${review.name}</h6>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0">${review.review}</p>
        </div>
    `).join('')}
  </div>
`;

const createMovieItemTemplate = (resto) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${resto.name}" 
      src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" />
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieDetailTemplate,
  createMovieItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
