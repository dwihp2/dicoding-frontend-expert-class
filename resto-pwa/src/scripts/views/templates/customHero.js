class Div extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
          <h1 class="hero__title">Find Your Favorite Food Place Here</h1>
          <p class="hero__tagline">Or you can recommend another place so other people can reach by post it here</p>
      </div>
    </div>
  `;
  }
}

customElements.define('hero-component', Div);
