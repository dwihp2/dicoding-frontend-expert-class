class Div extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title hero-bold">
            Find Your Favorite Food Place Here
          </h1>
          <p class="hero__tagline">
            Or you can recommend another place so other people can reach by post it here
          </p>
          <a href="#mainContent" class="btn">Find all in Culinarea!</a>
      </div>
    </div>
  `;
  }
}

customElements.define("hero-component", Div);
