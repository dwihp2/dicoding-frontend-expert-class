/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const assert = require('assert');

Feature('Favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/like');
});

const firstCondition = "You don't have any favorite restaurant";

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('#restaurants');
  I.see(firstCondition, '#restaurants');
});

Scenario('liking one restaurant', async (I) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.resto-item a');
  const firstCard = locate('.resto-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  console.log(firstCardTitle);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto-item__title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.resto-item a');
  const firstCard = locate('.resto-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  console.log(firstCardTitle);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/like');
  I.seeElement('.resto-item a');
  const likedCardTitle = await I.grabTextFrom('.resto-item__title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/like');
  I.seeElement('#restaurants');
  const noFavRestaurant = await I.grabTextFrom('#restaurants');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, firstCondition);
});
