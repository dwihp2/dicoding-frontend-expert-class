// fetch restaurant data
const restaurantData = require('../DATA.json');

export function appendData() {
    // dummy test response from DATA.json
    // const app = document.querySelector('#app');
    // app.innerHTML = `<pre>${JSON.stringify(restaurantData.resto.length, null, 4)}</pre>`;

    for (let i =0; i < restaurantData.resto.length; i++) {  
        let cardData = document.querySelector("#card-data");
        let cardItem = document.createElement("article"); 
        cardItem.className = "post-item";
        cardItem.innerHTML = `
            <div class="post-item__content_header">
                <img class="post-item__thumbnail"
                    src="${restaurantData.resto[i].pictureId}"
                    alt="Gambar dua orang wanita sedang memegang laptop">
                <div class="post-item__location">${restaurantData.resto[i].city}</div> 
            </div>
            <div class="post-item__content_main">
                <p class="post-item__rating">Rating: ${restaurantData.resto[i].rating}</p>
                <h1 class="post-item__title"><a href="#">${restaurantData.resto[i].name}</a></h1>
                <p class="post-item__description">${restaurantData.resto[i].description}</p>
            </div>
        `
        cardData.appendChild(cardItem);
    }
    
}
