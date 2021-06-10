class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="footer">
          <p>“Copyright © 2021 - CulinArea”</p>
      </div>
    </footer> 
  `;
  }
}

customElements.define('custom-footer', Footer);
