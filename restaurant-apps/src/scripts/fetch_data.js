// fetch restaurant data
const restaurantData = require('../DATA.json');

export function appendData() {
    // dummy test response from DATA.json
    const app = document.querySelector('#app');
    app.innerHTML = `<pre>${JSON.stringify(restaurantData.restaurants[0], null, 4)}</pre>`;

    let cardData = document.getElementById("card-data");
    // for (let i =0; i < restaurantData.restaurants.length; i++) {        
    //     let cardItem = document.createElement("article"); 
    //     cardItem.className = "post-item";
    //     cardItem.innerHTML = `
    //         <img class="post-item__thumbnail"
    //             src=${restaurantData.restaurants[i].pictureId}
    //             alt="Test alternative img description">
    //         <div class="post-item__content">
    //             <p class="post-item__date">About 10 Hours Ago By <a href="#" class="post-item__date__author">Dicoding
    //                 Intern</a>
    //             </p>
    //             <h1 class="post-item__title"><a href="#">${restaurantData.restaurants[i].pictureId}</a></h1>
    //             <p class="post-item__description">test description</p>
    //         </div>
    //     `
    // }

    cardData.appendChild(cardItem);
}



// function appendData(restaurantData) {
//     for (let i = 0; i < restaurantData.restaurants.length; i++) {
//         var cardData = document.getElementById("cardData");
//         let cardItem = document.createElement("article");
//         cardItem.className = "post-item";
//         cardItem.innerHTML = ;
//         cardData.appendChild(cardItem);
//     }
// }