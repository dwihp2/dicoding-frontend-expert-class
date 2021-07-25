import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
      <h4>City</h4>
      <p>${resto.city}</p>
      <h4>Address</h4>
      <p>${resto.address}</p>
      <h4>Category</h4>
      <ul>
        <li>${resto.categories[0].name}</li>
        <li>${resto.categories[1].name}</li>
      </ul>
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
  <div class="resto__overview">
    <<h3>Description></h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto__overview">
    <h3>Customer Review</h3>
    ${resto.customerReviews
      .map(
          (review) => `
        <div class="restaurantInfoList">
            <h6 tabindex="0">${review.name}</h6>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0">${review.review}</p>
        </div>
    `,
      )
      .join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}" 
      src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" />
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${
  resto.rating
}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
