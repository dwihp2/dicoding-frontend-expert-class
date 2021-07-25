class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1 class="hero__title hero-bold">
          Find Your Favorite Food Place Here
        </h1>
        <p class="hero__tagline">
          Or you can recommend another place so other people can reach by post it here
        </p>
        <a href="#main-content" class="btn">Find all in Culinarea!</a>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);
